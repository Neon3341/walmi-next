"use client"
import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@storage/localUserSlice";

import ReduxProvider from "@components/layouts/reduxProvider";

import Button from "@components/button/variantButton";

import Xlg from "@media/x-lg.svg";

export default function SetZeroBtn({ product }) {
    return (
        <ReduxProvider>
            <SetZeroBtnInner product={product} />
        </ReduxProvider>
    )
}

function SetZeroBtnInner({ product }) {
    const dispatch = useDispatch();
    const productId = product._id;
    const { cart } = useSelector((state) => state.localUser);
    const quantity = cart.find(item => item.id === productId)?.quantity || 0;

    const handleCartUpdate = useCallback((updater) => {
        const updatedCart = updater(cart).filter(item => item.quantity > 0);
        dispatch(setCart(updatedCart));
    }, [cart, dispatch]);

    const updateQuantity = useCallback((newQuantity) => {
        handleCartUpdate(prev => prev.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ));
    }, [handleCartUpdate, productId]);

    const setZero = useCallback(() => updateQuantity(0), [quantity, updateQuantity]);

    return (
        <Button onClick={setZero} className={"py-3 pl-2 pr-2 h-fit"} ico={Xlg}></Button>
    )
}
