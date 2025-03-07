import Image from "next/image";
import Link from "next/link";

import WalmiText from '@media/walmiText.png'
import WalmiFavi from '@media/favi.png'

import SearchBar from "./searchBar";
import CatalogDDM from "./catalogDDM";
import CatalogBtn from "./catalogBtn";
import IconButtons from "./iconButtons";

export default function Header({ }) {

    return (
        <header className=" flex flex-col items-center shadow-md w-[100vw] px-5">
            <div className="w-full h-[4.5rem] bg-background  justify-center fixed z-30 hidden sm:flex">
                <div className=" flex py-3 flex-row max-w-box-xl mx-5 w-full gap-x-4 justify-between  ">
                    <div className="flex flex-row w-fit gap-x-2">
                        <Link href={"/"} className="flex flex-row items-center w-36 lg:w-48">
                            <Image src={WalmiFavi} alt="Logo" width={40} className="w-10 hidden lg:block" />
                            <Image src={WalmiText} alt="Logo" width={160} className="min-w-40" />
                        </Link>
                        <CatalogBtn />
                    </div>
                    <div className="h-full w-full hidden md:block">
                        <SearchBar />
                    </div>
                    <IconButtons />
                </div>
            </div>
            <CatalogDDM />
            <div className="max-w-box-xl w-full h-fit justify-between py-2 mt-16 gap-x-4 z-0 hidden sm:flex">
                <div className="flex gap-x-2">
                    <span className="hover:text-latte cursor-pointer font-semibold px-2 py-1 transition-all">Москва</span> {/* Сделать выбор региона */}
                    <Link href={"/"} className="px-2 py-1  hover:text-green-600 transition-all">
                        <span>Сплит</span>
                    </Link>
                    <Link href={"/"} className="px-2 py-1 hover:text-latte transition-all">
                        <span>На заказ</span>
                    </Link>
                    <Link href={"/"} className="px-2 py-1 hover:text-latte transition-all">
                        <span>Компьютерные столы</span>
                    </Link>
                    <Link href={"/"} className="px-2 py-1 hover:text-latte transition-all">
                        <span>Барные стойки</span>
                    </Link>
                    <Link href={"/"} className="px-2 py-1 hover:text-latte transition-all  hidden lg:block">
                        <span>Барные стойки</span>
                    </Link>
                    <Link href={"/"} className="px-2 py-1 hover:text-latte transition-all hidden xl:block">
                        <span>Тумбы</span>
                    </Link>
                </div>
                <div className="flex gap-x-2">
                    <Link href={"/"} className="px-2 py-1 hidden xl:block  hover:text-latte transition-all">
                        <span>Покупайте как юрлицо</span>
                    </Link>
                    <Link href={"/"} className="pl-2 py-1 hidden lg:block  hover:text-latte transition-all">
                        <span>Станьте дистрибьютором</span>
                    </Link>
                </div>
            </div>
        </header >
    )
}