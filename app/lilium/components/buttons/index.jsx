"use client"
import Link from "next/link";
import LiliumDefaultButton from "./defaultButton";

export default function LiliumButton({ children, variant, id, className, link, ico = false, onClick = false }) {
    let classes = "select-none  text-[12px] gap-x-2 py-1 px-4 rounded-xl cursor-pointer transition-all hover:brightness-110 flex flex-row justify-center items-center content-center text-nowrap flex";
    const F = () => {
        console.log("Oops, there is no Action specified for this button...")
        return;
    }

    switch (variant) {
        case "sky":
            classes = className + " bg-sky " + classes;
            break;
        case "outline":
            classes = className + " bg-gray/10 border-[.06rem] rounded-[.625rem]  border-black/30" + classes;
            break;
        case "clear":
            classes = className + " border border-netural-200 pl-4 pr-4 py-2 rounded-2xl bg-transparent text-netural-400 hover:brightness-95" + classes;
            break;
        case "default":
            classes = className +  classes + " bg-neutral-300 rounded-2xl";
            break;
        case "noStyle":
            classes = className;
            break;
        default:
            classes = className + " select-none backdrop-blur cursor-pointer transition-all hover:brightness-110 flex flex-row justify-center items-center text-nowrap";
            break;
    }

    if (link) {
        return (
            <Link href={link} className="hover:underline ">
                <LiliumDefaultButton ico={ico ? ico : false} id={id} className={classes} onClick={onClick ? onClick : F}>{children}</LiliumDefaultButton>
            </Link>
        );
    } else {
        return (
            <LiliumDefaultButton ico={ico ? ico : false} onClick={onClick ? onClick : F} id={id} className={classes}>{children}</LiliumDefaultButton>
        );
    }
}
