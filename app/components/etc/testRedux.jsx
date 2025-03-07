"use client"

import { useSelector } from "react-redux";

export default function TestRedux({ }) {
    const search = useSelector((state) => state.search.search);

    return (
        <>
            <p>Результаты поиска по запросу: "{search}"</p>
        </>
    )
}