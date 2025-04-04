"use client"
import ProductGrid from "@components/layouts/productGrid";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import {
    setSearch,
    setFilters,
} from "@storage/searchSlice";
import Button from "@components/button/variantButton";


export default function CatalogFilters({ }) {
    const dispatch = useDispatch();
    const { specs, categories } = useSelector((state) => state.refs);
    const { filters } = useSelector((state) => state.search);

    const [collapsed, setCollapsed] = useState(true);

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
        <div className="relative z-50">
            <Button onClick={() => setCollapsed(prev => !prev)} variant={"outline"} className={"lg:hidden"}>Фильтры</Button>
            <div className={`${collapsed ? " opacity-0 scale-y-0" : " opacity-100 scale-y-100"} lg:opacity-100 lg:scale-y-100 origin-top z-50 transition-all duration-200 absolute top-12  lg:relative h-auto rounded-2xl bg-neutral-100 w-full px-3 py-3 flex flex-col gap-y-3`}>

                <div className="rounded-2xl  border-2 border-cappuccino w-full px-3 py-3" >
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
                <div className="rounded-2xl  border-2 border-cappuccino  w-full px-3 py-3" >
                    <h3 className="text-lg font-semibold">Ширина:</h3>
                    <div className="grid grid-cols-2">
                        {/* <input type="text" onChange={() => { handleClickPlural("width", child.value) }} /> */}
                        {specs.find(item => item.slug === "width")?.values.map(child => {
                            return (
                                <label className="flex items-center text-lg gap-x-2 cursor-pointer hover:bg-neutral-300/50 transition-colors rounded py-1 pl-2">
                                    <input onChange={() => { handleClickPlural("width", Number(child.value)) }} checked={filters[child.slug]?.includes(child.value)} type="checkbox" id={child.value} className="hidden peer" value={child.value} name={child.value} />
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
                <div className="rounded-2xl  border-2 border-cappuccino  w-full px-3 py-3" >
                    <h3 className="text-lg font-semibold">Глубина:</h3>
                    <div className="grid grid-cols-2">
                        {/* <input type="text" onChange={() => { handleClickPlural("width", child.value) }} /> */}
                        {specs.find(item => item.slug === "depth")?.values.map(child => {
                            return (
                                <label className="flex items-center text-lg gap-x-2 cursor-pointer hover:bg-neutral-300/50 transition-colors rounded py-1 pl-2">
                                    <input onChange={() => { handleClickPlural("depth", Number(child.value)) }} checked={filters[child.slug]?.includes(child.value)} type="checkbox" id={child.value} className="hidden peer" value={child.value} name={child.value} />
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
        </div>
    )
}

