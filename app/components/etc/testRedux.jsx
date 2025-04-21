"use client"
import WalmiApi from "@bin/walmiApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const getProducts = async (query) => {
    const api = new WalmiApi();
    const result = await api.get("/products/", {
        limit: 1,
        skip: 0,
        query: JSON.stringify(query)
    });
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

    }, []);


    return (
        <>
            {search && <p>Результаты поиска по запросу: "{search}"</p>}
            <p>Всего найдено: {total}</p>
        </>
    )
}