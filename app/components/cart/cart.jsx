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
    }, [cart.length]);


    return (
        <div className="col-span-4">
            <div className="flex flex-col gap-y-2">
                {cart.map((child, i) => {
                    return (
                        <div key={i} className="lg:grid lg:grid-cols-10 flex flex-row flex-wrap gap-x-2 border-b border-neutral-300 pb-3">
                            <div className="flex gap-x-2 lg:grid lg:grid-cols-7 lg:col-span-7">
                                <div className="lg:col-span-2 basis-1/4 h-auto rounded-2xl overflow-clip ">
                                    {productsData[child.id] && <Image className="w-full min-w-24" src={productsData[child.id]?.media.thumbnail} alt="thumb" unoptimized width={0} height={200} priority={true} /> || "Еще загружаем..."}
                                </div>
                                <div className="lg:col-span-5">
                                    <h3 className="w-full">{productsData[child.id]?.title || "Еще загружаем..."}</h3>
                                    <div className={`${inter.className} ml-1 mt-1 block lg:hidden`}>
                                        <p className="font-bold text-[20px] text-green-600 rounded-2xl w-fit leading-4">{priceSpaces(productsData[child.id]?.price)}  <span className="text-base">₽ </span></p>
                                        {productsData[child.id]?.oldPrice > 0 && <p className="line-through text-[12px]">{priceSpaces(productsData[child.id]?.oldPrice)}  ₽</p>}
                                        <span className="font-light text-sm">x {child.quantity} = {priceSpaces(productsData[child.id]?.price * child.quantity)}<span className="text-base">₽ </span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 basis-1 grow flex flex-col justify-between">
                                <div className={`${inter.className} ml-1 mt-1 hidden lg:block`}>
                                    <p className="font-bold text-[20px] text-green-600 rounded-2xl w-fit leading-4">{priceSpaces(productsData[child.id]?.price)}  <span className="text-base">₽ </span></p>
                                    {productsData[child.id]?.oldPrice > 0 && <p className="line-through text-[12px]">{priceSpaces(productsData[child.id]?.oldPrice)}  ₽</p>}
                                    <span className="font-light text-sm">x {child.quantity} = {priceSpaces(productsData[child.id]?.price * child.quantity)}<span className="text-base">₽ </span></span>
                                </div>
                                {productsData[child.id] && <CartButtons product={productsData[child.id]} displayAddToCart={false} /> || "Еще загружаем..."}
                            </div>
                            <div className="flex gap-x-3 items-center lg:flex-col">
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
