import Image from "next/image";
import Link from "next/link";

import WalmiText from '@media/walmiText.png'
import WalmiFavi from '@media/favi.png'

import SearchBar from "./searchBar"; 

export default function MobileHeader({ }) {

    return (
        <header className="lg:hidden flex flex-col  shadow-md w-[100vw] px-5 py-2 gap-y-2">
            <Link href={"/"} className="flex flex-row items-center w-36 lg:w-48">
                <Image src={WalmiFavi} alt="Logo" width={40} className="w-10 hidden lg:block" />
                <Image src={WalmiText} alt="Logo" width={160} className="min-w-40" />
            </Link>
            <div className="h-10">
                <SearchBar />
            </div>
        </header >
    )
}