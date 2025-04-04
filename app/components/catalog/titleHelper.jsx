"use client"
import WalmiApi from "@bin/walmiApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const getProducts = async (query) => {
    const api = new WalmiApi();
    const params = new URLSearchParams({
        limit: 1,
        skip: 0,
        query: JSON.stringify(query)
    }).toString();
    const result = await api.get("/products/", params);
    return result.total;
};

export default function TestRedux({ }) {
    const { search, filters } = useSelector((state) => state.search);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const filtersQuery = Object.entries(filters).reduce((acc, [key, value]) => {
            if (typeof value === 'string' && value.trim() !== '') {
                acc[key] = value;
            } else if (Array.isArray(value) && value.length > 0) {
                acc[`specs.${key}`] = { $in: value };
            }
            return acc;
        }, {});

        const searchQuery = search ? { $text: { $search: search } } : {};
        const newQuery = { ...filtersQuery, ...searchQuery };
        setTotal(getProducts(newQuery))

    }, [search, filters]);


    return (
        <div className="flex flex-col ml-2 self-center ">
            <span className={`${search ? "opacity-100" : "opacity-0"} -mt-1`}>Результаты по запросу: "{search}"</span>
            <span className="-mt-1" >Всего найдено: {total}</span>
        </div>
    )
}