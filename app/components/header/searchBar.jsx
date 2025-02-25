"use client"
import Button from "@components/button/variantButton";
import ReduxProvider from "@components/layouts/reduxProvider";
import { useState } from "react";


export default function SearchBar({ }) {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = () => {

    }

    return (
        <ReduxProvider>
            <div className="h-full w-full flex relative">
                <input onChange={handleChange} className="w-full px-4 border-2 border-gray  bg-transparent rounded-2xl" type="text" placeholder="Найти товары" />
                <Button link={"/catalog"} className={"flex h-full items-center absolute right-0 top-0 font-medium"}>Найти</Button>
            </div>
        </ReduxProvider>
    )
} 