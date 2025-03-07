"use client"
import { useSelector } from "react-redux";

import ReduxProvider from "@components/layouts/reduxProvider";

export default function GetQuantity() {
    return (
        <ReduxProvider>
            <GetQuantityInner />
        </ReduxProvider>
    )
}

function GetQuantityInner() {
    const { cart } = useSelector((state) => state.localUser);
    let quantity = 0;
    cart.forEach((elem) => { quantity += elem?.quantity || 0 });
    return (
       <>{ quantity }</> 
    )
}
