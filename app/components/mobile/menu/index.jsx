import Image from "next/image";
import Link from "next/link";

import WalmiText from '@media/walmiText.png'
import WalmiFavi from '@media/favi.png'



export default function MobileHeader({ }) {

    return (
        <header className="fixed lg:hidden grid grid-cols-4 h-16 bottom-0 left-0 right-0 w-full z-50 overflow-clip rounded-ss-2xl rounded-se-2xl">
            <Link href={"/"} className="bg-red-100 flex items-center justify-center">
                <div >
                    Домой
                </div>
            </Link>
            <Link href={"/catalog"} className="bg-red-100 flex items-center justify-center">
                <div >
                    Каталог
                </div>
            </Link>
            <Link href={"/cart"} className="bg-red-100 flex items-center justify-center">
                <div >
                    Корзина
                </div>
            </Link>
            <Link href={"/account"} className="bg-red-100 flex items-center justify-center">
                <div >
                    Личный кабинет
                </div>
            </Link>

        </header >
    )
}