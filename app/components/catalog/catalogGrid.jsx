"use client"
import WalmiApi from "@bin/walmiApi";
import ProductCard from "@components/product/cards";
import { useEffect, useState } from "react"

export default function CatalogProductGrid({ }) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState({});


    useEffect(() => {
        getProducts(16, page, query).then((data) => setProducts((prev => [...prev, data])))
    }, []);

    return (
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10 py-5 px-3 lg:px-8`}>
            {products?.map((child, index) => {
                return <ProductCard key={index} variant={variant} data={child} />
            })}
        </div>
    )
}



const getProducts = async (quantity, page, query) => {
    const api = new WalmiApi;
    const params = new URLSearchParams({ limit: quantity, skip: quantity * page, query: JSON.stringify(query) }).toString();
    const result = await api.get("/products/", params);
    return result.data;

}