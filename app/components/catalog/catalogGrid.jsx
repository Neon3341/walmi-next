"use client"
import ProductGrid from "@components/layouts/productGrid";
import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux";

export default function CatalogProductGrid({ }) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const initialDateCreate = useRef({ $gte: 1, $lt: Date.now() });
    const [query, setQuery] = useState({ dateCreate: initialDateCreate.current });

    const { search, filters } = useSelector((state) => state.search);

    useEffect(() => {
        // Формируем часть запроса для фильтров
        const filtersQuery = Object.entries(filters).reduce((acc, [key, value]) => {
            // Для строковых значений (не пустых)
            if (typeof value === 'string' && value.trim() !== '') {
                acc[key] = value;
            }
            // Для массивов (не пустых)
            else if (Array.isArray(value) && value.length > 0) {
                acc[`specs.${key}`] = { $in: value };
            }
            return acc;
        }, {});

        // Формируем часть запроса для поиска
        const searchQuery = search ? { $text: { $search: search } } : {};

        // Собираем полный запрос
        const newQuery = {
            dateCreate: initialDateCreate.current,
            ...filtersQuery,
            ...searchQuery,
        };

        setQuery(newQuery);
    }, [filters, search]); // Зависимости: фильтры и поиск

    return (
        <>
            <ProductGrid quantity={16} cols={4} query={query} />
        </>
    )
}