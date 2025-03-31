"use client"
import { Borel } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const borel = Borel({ 
    subsets: ['latin' ],
    weight: ['400'],
});

export default function LiliumLeftMenu({ }) {
    const [menuContent, setMenuContent] = useState();
    const pathname = usePathname();

    useEffect(() => {
        getMenu().then(setMenuContent)
    }, [])

    const isActive = (href) => {
        if(href.split("/").length == 2 ) return pathname === href;
        return pathname === href || pathname.startsWith(`${href}/`);
    }

    return (
        <div className="max-w-56 min-w-56 w-56  rounded-se-2xl rounded-ee-2xl bg-indigo-400 text-white overflow-clip">
            <h2 className={`${borel.className} text-3xl bg-indigo-400 pt-12 px-5`}>Lilium AP</h2>
            <section className=" w-full flex flex-col ">
                {menuContent?.map((child, i) => {
                    if (child.title == "separator") {
                        return (
                            <div key={i} className="my-2"></div>
                        )
                    } else {
                        return (
                            <div key={i} className=" flex flex-col">
                                <Link className={`py-2 w-full bg-indigo-400 px-5 hover:bg-indigo-700 transition-colors duration-150 ${isActive(child.href) && "bg-indigo-600  "}`} href={`${child.href}`}>
                                    {child.title}
                                </Link>
                                <div className={`${isActive(child.href) ? "scale-y-100 h-auto" : "scale-y-0 h-0 max-h-0"} bg-neutral-400 origin-top flex flex-col transition-all duration-150`}>
                                    {
                                        child?.children?.map((sub, index) => {
                                            return (
                                                <Link key={`${i}` + index} className={`${isActive(sub.href) && "bg-neutral-500"} ${ index + 1 == child?.children?.length && " "} py-1 px-5 bg-neutral-400 hover:bg-neutral-600 transition-colors duration-150`} href={`${sub.href}`}>
                                                    {sub.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
            <div className="grow bg-indigo-400 max-h-full"></div>
        </div>
    )
}

const getMenu = async () => {
    return [
        {
            title: "Главная",
            href: "/lilium"
        },
        {
            title: "Страницы",
            href: "/lilium/pages",
            children: [
                {
                    title: "Все страницы",
                    href: "/lilium/ecom/products"
                },
                {
                    title: "Создать",
                    href: "/lilium/ecom/categories"
                },
            ]
        },
        {
            title: "Записи",
            href: "/lilium/posts"
        },
        {
            title: "E-Commerce",
            href: "/lilium/ecom",
            children: [
                {
                    title: "Товары",
                    href: "/lilium/ecom/products"
                },
                {
                    title: "Категории",
                    href: "/lilium/ecom/categories"
                },
                {
                    title: "Характеристики",
                    href: "/lilium/ecom/specs"
                },
                {
                    title: "Заказы",
                    href: "/lilium/ecom/orders"
                },
            ]
        },
    ]
}