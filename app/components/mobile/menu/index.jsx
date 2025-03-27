"use client"
import Image from "next/image";
import Link from "next/link";
import ReduxProvider from "@components/layouts/reduxProvider";
import { useSelector } from "react-redux";

import House from '@media/house.svg';
import Heart from '@media/heart.svg';
import List from '@media/list.svg';
import Person from '@media/person.svg';
import BasketIco from '@media/basket3.svg';

import { useEffect, useState } from "react";



export default function MobileMenu() {

    return (
        <ReduxProvider>
            <MobileMenuInner />
        </ReduxProvider>
    )
}

export function MobileMenuInner({ }) {

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
        <header className="fixed bg-white border border-neutral-400 lg:hidden grid grid-flow-col h-16 bottom-0 left-0 right-0 w-full z-50 overflow-clip rounded-ss-2xl rounded-se-2xl">
            <Link href={"/"} className=" flex items-center justify-center">
                <Image alt="menu item" priority src={House} width={25} height={25} />
            </Link>
            <Link href={"/catalog"} className=" flex items-center justify-center">
                <Image alt="menu item" priority src={List} width={25} height={25} />
            </Link>
            <Link href={"/cart"} className=" flex items-center justify-center relative">
                <Image alt="menu item" priority src={BasketIco} width={25} height={25} />
                {cartQ && <span className="absolute right-4 bottom-3 rounded-xl bg-sky flex w-5 h-5 text-center justify-center items-center">{cartQ}</span>}
            </Link>
            <Link href={"/favorites"} className=" flex items-center justify-center relative">
                <Image alt="menu item" priority src={Heart} width={25} height={25} />
                <span className="absolute left-0 top-[-3px] bottom-0 my-auto font-semibold right-0 mx-auto flex w-5 h-5 text-center justify-center  items-center">{favorites.length}</span>
            </Link>
            <Link href={"/account"} className=" flex items-center justify-center">
                <Image alt="menu item" priority src={Person} width={25} height={25} />
            </Link>

        </header >
    )
}