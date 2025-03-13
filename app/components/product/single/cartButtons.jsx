"use client"
import { useRouter } from 'next/navigation';
import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCart, setFavorites } from "@storage/localUserSlice";

import { Inter } from "@next/font/google";
const inter = Inter();

import ReduxProvider from "@components/layouts/reduxProvider";

import Button from "@components/button/variantButton";
import Heart from '@media/heart.svg';
import HeartFill from '@media/heart-fill.svg';


export default function CartButtons({ product, displayAddToCart = true }) {
  return (
    <ReduxProvider>
      <CartButtonsInner product={product} displayAddToCart={displayAddToCart} />
    </ReduxProvider>
  )
}

function CartButtonsInner({ product, displayAddToCart }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, favorites } = useSelector((state) => state.localUser);
  const productId = product?._id;

  const isInCart = cart.some(item => item.id === productId);
  const isFavorite = favorites.includes(productId);
  const quantity = cart.find(item => item.id === productId)?.quantity || 0;

  const handleCartUpdate = useCallback((updater) => {
    const updatedCart = updater(cart).filter(item => item.quantity > 0);
    dispatch(setCart(updatedCart));
  }, [cart, dispatch]);

  const onClickCart = useCallback(() => {
    if (isInCart) {
      router.push('/cart');
      return;
    }
    handleCartUpdate(prev => [...prev, { id: productId, quantity: 1 }]);
  }, [isInCart, productId, handleCartUpdate, router]);

  const onClickFavorites = useCallback(() => {
    const updatedFavorites = isFavorite
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    dispatch(setFavorites(updatedFavorites));
  }, [favorites, isFavorite, productId, dispatch]);

  const updateQuantity = useCallback((newQuantity) => {
    handleCartUpdate(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ));
  }, [handleCartUpdate, productId]);

  const increment = useCallback(() => updateQuantity(Number(quantity) + 1), [quantity, updateQuantity]);
  const decrement = useCallback(() => updateQuantity(Number(quantity) - 1), [quantity, updateQuantity]);

  const handleInputChange = useCallback((e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    updateQuantity(value);
  }, [updateQuantity]);

  return (
    <>
      <div className={`${displayAddToCart ? "fixed lg:relative mb-14 pb-6 px-2 lg:mb-0 lg:pb-0 bottom-0 left-0 w-full rounded-ss-2xl rounded-se-2xl bg-neutral-100" : ""}   lg:bg-transparent lg:p-0 py-5  flex flex-row gap-x-2`}>
        <div className={`${cart.some(item => item.id === product._id) ? "w-full opacity-100 min-w-40" : "w-0 opacity-0"} max-w-40  text-2xl lg:text-3xl transition-all duration-400 h-full flex border rounded-2xl overflow-clip`}>
          <Button onClick={decrement} className={"px-4 h-full"}>-</Button>
          <input type="number" onChange={handleInputChange} className={`${inter.className} w-full text-center text-lg lg:text-2xl`} value={cart.find(item => item.id === product._id)?.quantity || 0} />
          <Button onClick={increment} className={"px-4 h-full"}>+</Button>
        </div>
        {displayAddToCart && <div className="w-full">
          <Button onClick={onClickCart} className={"font-semibold py-3"} variant={"sky"}>{cart.some(item => item.id === product._id) ? "К Корзине" : "В Корзину"}</Button>
        </div>}
        <div className={`${cart.some(item => item.id === product._id) ? "w-0 opacity-0 h-0" : "w-full opacity-100"} transition-all duration-400`}>
          <Button onClick={onClickFavorites} className={"py-3 h-full"} variant={"outline"} ico={favorites.indexOf(product._id) == -1 ? Heart : HeartFill}></Button>
        </div>
      </div>
    </>
  )
}
