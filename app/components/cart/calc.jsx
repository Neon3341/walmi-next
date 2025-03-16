"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxProvider from "@components/layouts/reduxProvider";

import WalmiApi from "@bin/walmiApi";

import Button from "@components/button/variantButton";
import GetQuantity from "./quantity";

export default function CartRightSide({ }) {
    return (
        <ReduxProvider>
            <CartRightSideInner />
        </ReduxProvider>
    )
}

export function CartRightSideInner({ }) {
    const { cart } = useSelector((state) => state.localUser);
    const [cartCalc, setCartCalc] = useState({
        sum: 12300,
        oldSum: 13240
    })


    useEffect(() => {
        calcCart(cart).then((data) => setCartCalc(data))
    }, [cart]);

    return (
        <>
            <div className="h-fit mb-16 col-span-2 rounded-2xl py-2 px-4 mt-2 bg-neutral-100">
                <div className="flex justify-between">
                    <p className="text-[12px] font-bold">Всего: <GetQuantity /></p>
                    {cartCalc?.oldSum > 0 && <p className="line-through text-[12px]">{priceSpaces(cartCalc?.oldSum)}  ₽</p>}
                </div>
                <div className="flex justify-between">
                    {cartCalc?.oldSum > 0 && <p className="text-[12px]">Выгода</p>}
                    {cartCalc?.oldSum > 0 && <p className="text-[12px] text-red-500">{priceSpaces(cartCalc?.oldSum - cartCalc?.sum)}  ₽</p>}
                </div>
                <div className="flex justify-between mb-5">
                    <p className="text-[12px]">Доставка</p>
                    <p className="text-[12px]">При оформлении</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="font-bold">Итого</h2>
                    <p className="font-bold text-[20px] text-green-600 rounded-2xl w-fit leading-4">{priceSpaces(cartCalc?.sum)}  <span className="text-base">₽ </span></p>
                </div>
                <Button className={"mt-5"} variant={"outline"}>Оформить</Button>
            </div>
            <div className="fixed lg:hidden items-center left-0 right-0 bottom-0 pb-6 px-4 pt-2 flex justify-between mb-12 rounded-ss-2xl rounded-se-2xl bg-green-100 w-full min-h-16">
                <p className="font-bold text-[20px] text-green-600 rounded-2xl w-fit leading-4">{priceSpaces(cartCalc?.sum)}  <span className="text-base">₽ </span></p>
                <Button variant={"outline"}>Оформить</Button>
            </div>
        </>
    )
}

const calcCart = async (cart) => {
    const api = new WalmiApi;
    const params = new URLSearchParams({ cart: JSON.stringify(cart) }).toString();
    const response = await api.get(`/cart/calc/`, params).catch(error => console.log(error));
    return response.data;
}

const priceSpaces = (price = "") =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
