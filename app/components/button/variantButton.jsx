"use client"
import Link from "next/link";
import SimpleBtn from ".";

export default function Button({ children, variant, id, className, link, ico = false, onClick = false }) {
    let classes = "";
    const F = () => {
        console.log("Oops, there is no Action specified for this button...")
        return;
    }

    switch (variant) {
        case "sky":
            classes = className + " bg-sky";
            break;
        case "outline":
            classes = className + " bg-gray/10 border-[.06rem] rounded-[.625rem]  border-black/30";
            break;
        case "clear":
            classes = className + " border border-netural-200 pl-4 pr-4 py-2 rounded-2xl bg-transparent text-netural-400 hover:brightness-95";
            break;
        default:
            classes = className + " bg-gray";
            break;
    }

    if (link) {
        return (
            <Link href={link} className="hover:underline ">
                <SimpleBtn ico={ico ? ico : false} id={id} className={classes} onClick={onClick ? onClick : F}>{children}</SimpleBtn>
            </Link>
        );
    } else {
        return (
            <SimpleBtn ico={ico ? ico : false} onClick={onClick ? onClick : F} id={id} className={classes}>{children}</SimpleBtn>
        );
    }
}
