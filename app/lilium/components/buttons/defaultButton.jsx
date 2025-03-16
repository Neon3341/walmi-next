"use client"
import Image from "next/image";

export default function LiliumDefaultButton({ ico = false, id, className, children, onClick}) {
    let icon = "";
    if (ico) {
        icon = (<Image src={ico} alt="Star" className="w-4 min-w-4 h-4 my-auto" />)
    }

    return (
        <div id={id} className={`${className} `} onClick={onClick}>
            {icon}{children?.length && <span>{children}</span>}
        </div>
    )
} 