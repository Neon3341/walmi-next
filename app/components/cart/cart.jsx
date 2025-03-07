"use client"

import { useDispatch, useSelector } from "react-redux";


import ReduxProvider from "@components/layouts/reduxProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import WalmiApi from "@bin/walmiApi";
import CartButtons from "@components/product/single/cartButtons";
import CartFavorites from "./favoriteBtns";
import SetZeroBtn from "./setZeroBtn";

import { Inter } from "@next/font/google";
const inter = Inter();

export default function CartLeftSide() {

    return (
        <ReduxProvider>
            <CartLeftSideInner />
        </ReduxProvider>
    )

}

function CartLeftSideInner() {
    const dispatch = useDispatch();
    const { cart, favorites } = useSelector((state) => state.localUser);
    const [productsData, setProductsData] = useState({});

    useEffect(() => {
        cart.map((child, i) => {
            getProduct(child.id).then((data) => setProductsData((prev) => { return { ...prev, [child.id]: data } }))
        })
    }, [cart]);


    return (
        <div className="col-span-4">
            <div className="flex flex-col gap-y-2">
                {cart.map((child, i) => {
                    return (
                        <div key={i} className="grid grid-cols-10 gap-x-2 border-b border-neutral-300 pb-3">
                            <div className="col-span-2 w-full h-auto rounded-2xl overflow-clip ">
                                {productsData[child.id] && <Image className="w-full " src={productsData[child.id]?.media.thumbnail} alt="thumb" unoptimized width={200} height={200} priority={true} /> || "Еще загружаем..."}
                            </div>
                            <div className="col-span-5">
                                <h3>{productsData[child.id]?.title || "Еще загружаем..."}</h3>
                            </div>
                            <div className="col-span-2 flex flex-col justify-between">
                                <div className={`${inter.className} ml-1 mt-1`}>
                                    <p className="font-bold text-[20px] text-green-600 rounded-2xl w-fit leading-4">{priceSpaces(productsData[child.id]?.price)}  <span className="text-base">₽ </span></p>
                                    {productsData[child.id]?.oldPrice > 0 && <p className="line-through text-[12px]">{priceSpaces(productsData[child.id]?.oldPrice)}  ₽</p>}
                                    <span className="font-light text-sm">x {child.quantity} = {priceSpaces(productsData[child.id]?.price * child.quantity)}<span className="text-base">₽ </span></span>
                                </div>
                                {productsData[child.id] && <CartButtons product={productsData[child.id]} displayAddToCart={false} /> || "Еще загружаем..."}
                            </div>
                            <div className="flex flex-col">
                                {productsData[child.id] && <CartFavorites product={productsData[child.id]} />}
                                {productsData[child.id] && <SetZeroBtn product={productsData[child.id]} />}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

async function getProduct(prodId) {
    const api = new WalmiApi;
    const response = await api.get(`/products/${prodId}/`).catch(error => console.log(error));
    return response.data;
}

const priceSpaces = (price = "") =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
