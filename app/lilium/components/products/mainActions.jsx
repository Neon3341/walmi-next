"use client"

import { useState } from "react"

export default function LiliumProductMainActions({ product }) {
    const [isShown, setIsShown] = useState(false)

    return (
        <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="relative text-[12px]"
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10"></div>
            <div className={`${isShown ? "opacity-100" : "opacity-0"} transition-opacity relative flex gap-x-1 z-20`}>
                <span className="py-1 px-2 hover:text-indigo-800 cursor-pointer">Изменить</span>
                <span className="py-1 px-2 hover:text-indigo-800 cursor-pointer">Открыть</span>
                <span className="py-1 px-2 hover:text-indigo-800 cursor-pointer">Клонировать</span>
                <span className="py-1 px-2 hover:text-red-800 cursor-pointer text-red-600">Удалить</span>
            </div>
        </div>
    )
}