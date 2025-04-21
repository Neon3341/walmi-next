"use client"
import WalmiApi from "@bin/walmiApi";
import ProductCard from "@components/product/cards";
import { useEffect, useState, useRef, useCallback } from "react"

export default function ProductGrid({ quantity = 6, page = 0, variant = "small", cols = 3, query = {} }) {
    const [products, setProducts] = useState([]);
    const initialDateCreate = useRef({ $gte: 1, $lt: Date.now() });
    const [buildedQuery, setBuildedQuery] = useState({ 
        dateCreate: initialDateCreate.current,
        ...query 
    });

    const deepCompare = (obj1, obj2) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts(quantity, page, buildedQuery);
            setProducts(data);
        };
        fetchProducts();
    }, [quantity, page, buildedQuery]);

    useEffect(() => {
        const newQuery = { dateCreate: initialDateCreate.current, ...query };
        setBuildedQuery(prev => {
            return deepCompare(prev, newQuery) ? prev : newQuery;
        });
    }, [query]);

    return (
        <div className={`w-full grid grid-cols-2  lg:grid-cols-${cols} gap-x-3 gap-y-10 py-5 px-3 lg:px-8`}>
            {products?.map((child, index) => (
                <ProductCard key={index} variant={variant} data={child} />
            ))}
        </div>
    )
}

const getProducts = async (quantity, page, query) => {
    const api = new WalmiApi;
    const result = await api.get("/products/", { 
        limit: quantity, 
        skip: quantity * page, 
        query: JSON.stringify(query) 
    });
    return result.data;
}