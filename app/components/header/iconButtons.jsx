"use client"
import Image from "next/image";
import Link from "next/link";

import ReduxProvider from "@components/layouts/reduxProvider";
import { useSelector } from "react-redux";

import BasketIco from '@media/basket3.svg'
import AtIco from '@media/at.svg'
import TelIco from '@media/telephone.svg'
import Heart from '@media/heart.svg';
import { useEffect, useState } from "react";

export default function IconButtons() {

    return (
        <ReduxProvider>
            <IconButtonsInner />
        </ReduxProvider>
    )
}

function IconButtonsInner() {
    const { cart, favorites } = useSelector((state) => state.localUser);
    const [cartQ, setCartQ] = useState(cart.length);

    useEffect(() => {
        setCartQ(() => {
            let q = 0;
            cart.map((child, i) => {
                q += child?.quantity;
            })
            return q;
        })
    }, [cart]);

    return (
        <div className="flex gap-x-2 items-center leading-3 justify-between w-fit text-black/80 ">
            <Link href={"/cart"} className="flex items-center flex-col hover:text-latte transition-all self-center relative">
                <Image alt="cart" src={BasketIco} height={25} width={25} className="min-w-6" />
                <span className="text-xs text-foreground/5 leading-3 mt-2 hidden lg:block">Корзина</span>
                {
                    cartQ ?
                        <span className="absolute left-0 top-0 rounded-xl bg-sky hidden lg:flex w-5 h-5 text-center justify-center  items-center">{cartQ}</span>
                        : ""
                }
            </Link>
            <Link href={"/favorites"} className="flex items-center flex-col hover:text-latte transition-all self-center relative">
                <Image alt="cart" src={Heart} height={25} width={25} className="min-w-6" />
                <span className="text-xs text-foreground/5 leading-3 mt-2 hidden lg:block">Избранные</span>
                <span className="absolute left-0 top-[1px] font-semibold right-0 mx-auto hidden lg:flex w-5 h-5 text-center justify-center  items-center">{favorites.length}</span>
            </Link>
            {/* <a className="flex items-center flex-col hover:text-latte transition-all self-center" href="tel:74951234567">
                <Image alt="call" src={TelIco} height={25} width={25} className="min-w-6" />
                <span className="text-xs text-foreground/5 leading-3 mt-2 hidden lg:block">Позвонить</span>
            </a> */}
            <a className="flex items-center flex-col hover:text-latte transition-all self-center" href="mailto:sales@walmi.ru">
                <Image alt="email" src={AtIco} height={25} width={25} className="min-w-6" />
                <span className="text-xs text-foreground/5 leading-3 mt-2 hidden lg:block">Написать</span>
            </a>
        </div>
    )
}