"use client"
import Image from "next/image";

export default function SimpleBtn({ ico = false, id, className, children, onClick}) {
    let icon = "";
    if (ico) {
        icon = (<Image src={ico} alt="Star" className="w-4 min-w-4 h-4 my-auto" />)
    }

    return (
        <div id={id} className={`${className} select-none backdrop-blur gap-x-2 py-2 px-8 rounded-xl cursor-pointer transition-all hover:brightness-110 flex flex-row justify-center items-center text-nowrap`} onClick={onClick}>
            {icon}<span>{children}</span>
        </div>
    )
} 