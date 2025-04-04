"use client"
import { useEffect, useState, useRef, useCallback } from "react"
import { useSelector } from "react-redux";
import WalmiApi from "@bin/walmiApi";
import ProductGridStatic from "@components/layouts/productGridStatic";

const getProducts = async (quantity, page, query) => {
    const api = new WalmiApi();
    const params = new URLSearchParams({
        limit: quantity,
        skip: quantity * page,
        query: JSON.stringify(query)
    }).toString();
    const result = await api.get("/products/", params);
    return result;
};

export default function CatalogProductGrid({ }) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0);
    const initialDateCreate = useRef({ $gte: 1, $lt: Date.now() });
    const [query, setQuery] = useState({ dateCreate: initialDateCreate.current });
    const triggerRef = useRef();

    const { search, filters } = useSelector((state) => state.search);

    useEffect(() => {
        const filtersQuery = Object.entries(filters).reduce((acc, [key, value]) => {
            if (typeof value === 'string' && value.trim() !== '') {
                acc[key] = value;
            } else if (Array.isArray(value) && value.length > 0) {
                acc[`specs.${key}`] = { $in: value };
            }
            return acc;
        }, {});

        const searchQuery = search ? { $text: { $search: search } } : {};
        const newQuery = { dateCreate: initialDateCreate.current, ...filtersQuery, ...searchQuery };

        setQuery(newQuery);
    }, [filters, search]);

    useEffect(() => {
        setPage(0);
        setProducts([]);
        setHasMore(true);
    }, [query]);

    const loadProducts = useCallback(async () => {

        setIsLoading(true);
        try {
            const result = await getProducts(16, page, query);

            setHasMore(result.data.length > 0 && (products.length + result.data.length) < result.total);
            setProducts(prev => [...prev, ...result.data]);
            setTotal(result.total);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        } finally {
            setIsLoading(false);
        }
    }, [page, query]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts, query]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    setPage(prev => prev + 1);
                }
            },
            { root: null, rootMargin: "100px", threshold: 1.0 }
        );

        if (triggerRef.current) observer.observe(triggerRef.current);

        return () => {
            if (observer) observer.disconnect();
        };
    }, [isLoading, hasMore]);

    return (
        <div className="relative">
            {!total && !isLoading && <h2 className="mt-12 text-xl font-semibold">К сожалению, ничего не найдено!</h2>}
            {!total && isLoading && <h3 className="mt-12 text-base font-semibold">Загружаем товары!</h3>}
            <ProductGridStatic products={products} cols={4} />
            <div ref={triggerRef} className="absolute bottom-64 bg-red-500 w-0" style={{ height: "20px" }} />
            {isLoading && <div>Загрузка...</div>}
            {!hasMore && <div>К сожалению, больше нет товаров отвечающих вашим фильтрам</div>}
        </div>
    );
}