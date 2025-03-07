"use client"

import { useDispatch, useSelector } from "react-redux";

import ReduxProvider from "@components/layouts/reduxProvider";
import { setCart, setFavorites } from "@storage/localUserSlice";
import { useEffect } from "react";

export default function PreloadState() {

    return (
        <ReduxProvider>
            <StateLoader />
        </ReduxProvider>
    )

}

function StateLoader() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage) {

            localStorage?.getItem('cart') ? dispatch(setCart(JSON.parse(localStorage?.getItem('cart')))) : dispatch(setCart([]))
            localStorage?.getItem('favorites') ? dispatch(setFavorites(JSON.parse(localStorage?.getItem('favorites')))) : dispatch(setFavorites([]))
        }
    }, []);
}