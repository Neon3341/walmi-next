"use client";

import { useDispatch, useSelector } from "react-redux";
import ReduxProvider from "@components/layouts/reduxProvider";
import { setCart, setFavorites } from "@storage/localUserSlice";
import { useEffect } from "react";
import eruda from "eruda";

export default function PreloadState() {
    return (
        <ReduxProvider>
            <StateLoader />
        </ReduxProvider>
    );
}

function StateLoader() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage) {
            const cart = localStorage?.getItem('cart');
            const favorites = localStorage?.getItem('favorites');
            dispatch(setCart(cart ? JSON.parse(cart) : []));
            dispatch(setFavorites(favorites ? JSON.parse(favorites) : []));
        }

        if (process.env.NODE_ENV === 'development') {
            eruda.init();
        }
    }, []);

    return null;
}
