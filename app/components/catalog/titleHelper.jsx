"use client"

import { useSelector, useDispatch } from "react-redux";



export default function CatalogTitleHelper({ }) {
    const { search } = useSelector((state) => state.search);

    return (
        <>
            {search && <span className="self-center ml-2">Результаты по запросу: "{search}"</span>}
        </>
    )
}

