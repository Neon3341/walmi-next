"use client"
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@storage/localUserSlice";
import Button from "@components/button/variantButton";


import ReduxProvider from "@components/layouts/reduxProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import WalmiApi from "@bin/walmiApi";
import CartButtons from "@components/product/single/cartButtons";
import CartFavorites from "./favoriteBtns";
import SetZeroBtn from "./setZeroBtn";

import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ['latin', 'cyrillic'], 
    display: 'swap',
}); 

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
                .catch((error) => {
                    console.log(error);
                    setZero(child.id)
                });
        })
    }, [cart.length]);

    const handleCartUpdate = useCallback((updater) => {
        const updatedCart = updater(cart).filter(item => item.quantity > 0);
        dispatch(setCart(updatedCart));
    }, [cart, dispatch]);

    const updateQuantity = useCallback((newQuantity, productId) => {
        handleCartUpdate(prev => prev.map(item =>
            item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ));
    }, [handleCartUpdate]);

    const setZero = useCallback((productId) => updateQuantity(0, productId), [updateQuantity]);

    return (
        <div className="col-span-4">
            <div className="flex flex-col gap-y-2">
                {cart.length > 0 ? cart.map((child, i) => {
                    return (
                        <div key={i} className="lg:grid lg:grid-cols-10 flex flex-row flex-wrap gap-x-2 border-b border-neutral-300 pb-3">
                            <div className="flex gap-x-2 lg:col-span-7">
                                <div className="lg:col-span-2 basis-1/4 h-auto rounded-2xl overflow-clip ">
                                    {productsData[child.id] && <Image className="w-full min-w-24 lg:min-w-32" src={productsData[child.id]?.media.thumbnail} alt="thumb" unoptimized width={0} height={200} priority={true} /> || "Еще загружаем..."}
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
                }) :
                    <main className="flex flex-col items-center ">
                        <div className="lg:max-w-[80%] min-h-96 w-full lg:min-w-[600px] flex flex-col gap-y-4 justify-center">
                            <div className="flex flex-col items-center gap-x-2">
                                <h1 className="text-2xl font-semibold ">Ваша корзина пуста</h1>
                                <p>Как только вы добавите товары в корзину, они отобразятся здесь</p>
                            </div>
                            <Button variant={"outline"} link={"/"}>Вернуться на главную</Button>
                        </div>
                    </main>
                }
            </div>
        </div>
    )
}

async function getProduct(prodId) {
    const api = new WalmiApi;
    const response = await api.get(`/products/${prodId}/`)
    return response.data;
}

const priceSpaces = (price = "") =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
