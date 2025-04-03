"use client"
import ProductGrid from "@components/layouts/productGrid";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import {
    setSearch,
    setFilters,
} from "@storage/searchSlice";


export default function CatalogFilters({ }) {
    const dispatch = useDispatch();
    const { specs, categories } = useSelector((state) => state.refs);
    const { filters } = useSelector((state) => state.search);
    const [form, setForm] = useState({});

    const handleClickPlural = (slug, newValue) => {
        const currentValues = filters[slug] || [];
        if (currentValues.includes(newValue)) {
            const newFilters = {
                ...filters,
                [slug]: currentValues.filter(value => value !== newValue)
            };
            dispatch(setFilters(newFilters));
        } else {
            const newFilters = {
                ...filters,
                [slug]: [...currentValues, newValue]
            };
            dispatch(setFilters(newFilters));
        }
    };
    return (
        <div className="rounded-2xl bg-neutral-100 w-full px-3 py-3">

            <div>
                <h3 className="text-lg font-semibold">Цвет:</h3>
                <div className="flex flex-col gap-y-1">
                    {specs.find(item => item.slug === "color")?.values.map(child => {
                        return (
                            <label className="flex items-center text-lg gap-x-2 cursor-pointer hover:bg-neutral-300/50 transition-colors rounded py-1 pl-2">
                                <input onChange={() => { handleClickPlural("color", child.value) }} checked={filters[child.slug]?.includes(child.value)} type="checkbox" id={child.value} className="hidden peer" value={child.value} name={child.value} />
                                <div className="w-2 h-2 rounded-xl border-2 border-neutral-300 peer-checked:bg-latte peer-checked:border-latte peer-checked:ring-2 peer-checked:ring-transparent "></div>
                                {child.description?.color &&
                                    <div style={{ backgroundColor: child.description.color }} className="  w-4 h-4 border left-[4px] border-neutral-400 rounded-xl"></div>
                                }
                                <span className="">{child.value}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

