"use client"
import ReduxProvider from "@components/layouts/reduxProvider";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import WalmiApi from "@bin/walmiApi";
import Button from "@components/button/variantButton";
import Input from "../inputs/input";
import { setCart } from "@storage/localUserSlice";

export default function OrderForm() {

    return (
        <ReduxProvider>
            <OrderFormInner />
        </ReduxProvider>
    )
}

function OrderFormInner() {
    const { cart } = useSelector((state) => state.localUser);
    const [formData, setFormData] = useState({ cart: [...cart] });
    const [status, setStatus] = useState({ err: false, notice: false });
    const router = useRouter();
    const dispatch = useDispatch();
    
    useEffect(() => {
        setFormData((prev) => ({ ...prev, cart: [...cart] }))
    }, [cart]);

    const submit = async (e) => {
        e.preventDefault();
        if (!formData.name) return setStatus((prev) => ({ ...prev, err: "Пожалуйста, введите Имя" }));
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!formData.email || !isValidEmail(formData.email)) return setStatus((prev) => ({ ...prev, err: "Пожалуйста, проверьте email" }));
        const isValidPhone = (phone) => /^\+?[\d\s\-\(\)]{7,20}$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
        if (!formData.tel || !isValidPhone(formData.tel)) return setStatus((prev) => ({ ...prev, err: "Пожалуйста, проверьте Номер телефона" }));
        setStatus((prev) => ({ ...prev, err: false }));

        const api = new WalmiApi;
        const body = { ...formData }
        //console.log(body);
        api.post('/orders/', body).then((response) => {
            dispatch(setCart([]))
            setStatus(({ notice: "Успешно оформлен!", err: false }));
            router.push(`/order/${response?.id}/`);
        }).catch((err) => {
            console.error(err);
            setStatus((prev) => ({ ...prev, err: "Ошибка на сервере, повторите попытку позже или свяжитесь с нами" }));
        });
    };
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    return (
        <form className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-2 rounded-xl bg-neutral-200 p-2">
                <Input label="Имя" placeholder="Егор" value={formData.name} id={"name"} autocomplete={"first-name"} onChange={handleChange} />
                <Input label="Почта" type="email" placeholder="Ваш email адрес" value={formData.email} id={"email"} autocomplete={"email"} onChange={handleChange} />
                <Input label="Телефон" type="phone" placeholder="Ваш номер телефона" value={formData.tel} id={"tel"} autocomplete={"phone"} onChange={handleChange} />
                <Button onClick={submit} variant={"outline"} className={"mt-4 "}>Подтвердить</Button>
            </div>
            <div className="flex flex-col gap-y-2">
                {status.notice && <span className="rounded-2xl py-1 text-center transition-all bg-green-200">{status.notice}</span>}
                {status.err && <span className="rounded-2xl py-1 text-center transition-all bg-red-200">{status.err}</span>}
            </div>
        </form>
    )
}