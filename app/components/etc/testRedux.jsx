"use client"

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestRedux({ }) {
    const [state, setState] = useState();
    const search = useSelector((state) => state.search.search);
    useEffect(() => {
        console.log(search);
        setState(search)
        return () => {
            
        };
    }, [search]);
    return (
        <>
            <p>Результаты поиска по запросу: "{state}"</p>
        </>
    )
}