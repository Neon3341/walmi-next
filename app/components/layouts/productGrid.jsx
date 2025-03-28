"use client"
import WalmiApi from "@bin/walmiApi";
import ProductCard from "@components/product/cards";
import { useEffect, useState } from "react"

export default function ProductGrid({ quantity = 6, page = 0, variant = "small", cols = 3}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(quantity, page).then(setProducts)
    }, []);

    return (
        <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-x-3 gap-y-10 py-5 px-3 lg:px-8`}>
            {products?.map((child, index) => {
                return <ProductCard key={index} variant={variant} data={child}/>
            })}
        </div>
    )
}



const getProducts = async (quantity, page) => {
    
    const api = new WalmiApi;
    const params = new URLSearchParams({ limit: quantity, skip: quantity * page }).toString();
    const result = await api.get("/products/", params);
    return result.data;

}