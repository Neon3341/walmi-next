"use client"
import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "@storage/localUserSlice";

import ReduxProvider from "@components/layouts/reduxProvider";

import Button from "@components/button/variantButton";
import Heart from '@media/heart.svg';
import HeartFill from '@media/heart-fill.svg';


export default function CartFavorites({ product }) {
    return (
        <ReduxProvider>
            <CartFavoritesInner product={product} />
        </ReduxProvider>
    )
}

function CartFavoritesInner({ product }) {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.localUser);
    const productId = product?._id;

    const isFavorite = favorites.includes(productId);


    const onClickFavorites = useCallback(() => {
        const updatedFavorites = isFavorite
            ? favorites.filter(id => id !== productId)
            : [...favorites, productId];
        dispatch(setFavorites(updatedFavorites));
    }, [favorites, isFavorite, productId, dispatch]);

    return (
        <Button onClick={onClickFavorites} className={"py-3 pl-2 pr-2 h-fit"}  ico={favorites.indexOf(product._id) == -1 ? Heart : HeartFill}></Button>
    )
}
