"use client"
import Button from "@components/button/variantButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

import {
    setSearch
} from "@storage/searchSlice";


export default function SearchInput({ }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = () => {
        dispatch(setSearch(searchInput))
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchInput.trim()) {
            e.preventDefault();
            handleClick();
            router.push("/catalog");
        }
    };

    return (
        <div className="h-full w-full flex relative">
            <input onChange={handleChange} onKeyDown={handleKeyDown} className="w-full px-4 border-2 border-gray  bg-transparent rounded-2xl" type="text" placeholder="Найти товары" />
            <Button onClick={handleClick} link={"/catalog"} variant={"default"} className={"bg-cappuccino flex h-full items-center absolute right-0 top-0 font-medium"}>Найти</Button>
        </div>
    )
} 