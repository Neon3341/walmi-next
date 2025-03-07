"use client"

import ProductCard from "@components/product/cards";
import { useEffect, useState } from "react"

export default function ProductGrid({ quantity = 6, page = 0, variant = "small"}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(quantity, page).then(setProducts)
    }, []);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 py-5 px-8">
            {products?.map((child, index) => {
                return <ProductCard key={index} variant={variant} data={child}/>
            })}
        </div>
    )
}



const getProducts = async (quantity, page) => {
    const array = [
        {
            title: "Hoff Loft - Письменный стол",
            price: 18000,
            oldPrice: 19000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/438/han9ddtna27u4jscus5kmawxxsqvyfvc.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/2f6/0u2zm3hw99pzfce517az7p25qs6fdjf5.jpg",
                    "https://hoff.ru/upload/iblock/ce5/c6z2uyxb0mo2qww7hnqjv3gljb2mb5ab.jpg",
                    "https://hoff.ru/upload/iblock/406/50kvic51gnx6195x3e6vzhmuwmfykn3a.jpg",
                    "https://hoff.ru/upload/iblock/7f9/10w9ifgz4uvcvlriroafl00wzehhmljv.jpg",
                ]
            }
        },
        {
            title: "Hoff Loft - Письменный стол",
            price: 19500,
            oldPrice: 20000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/d23/0ccc39n4shr3g4bltp1s01b3zhvzh1av.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/36e/5jb2k9o7hntb9bzoa3zpq6t6v38ii9ky.jpg",
                    "https://hoff.ru/upload/iblock/4d9/kmoisv4vw7t2tmz3wmxb78iyttru9t8h.jpg",
                    "https://hoff.ru/upload/iblock/6ef/500q10g6ymi60vl5vpr8h1kxt5kqgfcq.jpg",
                    "https://hoff.ru/upload/iblock/b77/3cg52ctm3hm9j25t2vhkg0o3qd0uwdx4.jpg",
                ]
            }
        }
        ,
        {
            title: "Hoff Loft - Письменный стол",
            price: 29000,
            oldPrice: 30000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/b7c/b7c3ef5cd0d3c24057684b28a14f004e.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/edc/edc3a4aa65ecf6b7cf6b649f0160a1b4.jpg",
                    "https://hoff.ru/upload/iblock/758/7584d018707f110927a82055c2363ee4.jpg",
                    "https://hoff.ru/upload/iblock/915/9151690d770e95d9366477866ef77a81.jpg",
                    "https://hoff.ru/upload/iblock/7df/7df9f2a0d1da898e558d74babc8fc7d0.jpg",
                ]
            }
        },
        {
            title: "Hoff Loft - Shadow 2 - Письменный стол Лофт",
            price: 9000,
            oldPrice: 12000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/163/163d56c913c637672cc892000e4ebda8.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/313/313a3da16fdcc0b48c188bffe592841e.jpg",
                    "https://hoff.ru/upload/iblock/531/53129fcf8c3b4a5f32d92b12cd0e85c1.jpg",
                    "https://hoff.ru/upload/iblock/290/29096cc729aff2c91d2c5598f256a485.jpg",
                    "https://hoff.ru/upload/iblock/959/959d6f031da6caae63a7091ad62f93ad.jpg",
                ]
            }
        },
        {
            title: "Hoff Loft - Письменный стол",
            price: 29000,
            oldPrice: 30000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/b7c/b7c3ef5cd0d3c24057684b28a14f004e.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/edc/edc3a4aa65ecf6b7cf6b649f0160a1b4.jpg",
                    "https://hoff.ru/upload/iblock/758/7584d018707f110927a82055c2363ee4.jpg",
                    "https://hoff.ru/upload/iblock/915/9151690d770e95d9366477866ef77a81.jpg",
                    "https://hoff.ru/upload/iblock/7df/7df9f2a0d1da898e558d74babc8fc7d0.jpg",
                ]
            }
        },
        {
            title: "Hoff Loft - Shadow - Письменный стол",
            price: 9000,
            oldPrice: 12000,
            id: 17343424,
            categories: [],
            media: {
                thumbnail: "https://hoff.ru/upload/iblock/163/163d56c913c637672cc892000e4ebda8.jpg",
                video: null,
                gallery: [
                    "https://hoff.ru/upload/iblock/313/313a3da16fdcc0b48c188bffe592841e.jpg",
                    "https://hoff.ru/upload/iblock/531/53129fcf8c3b4a5f32d92b12cd0e85c1.jpg",
                    "https://hoff.ru/upload/iblock/290/29096cc729aff2c91d2c5598f256a485.jpg",
                    "https://hoff.ru/upload/iblock/959/959d6f031da6caae63a7091ad62f93ad.jpg",
                ]
            }
        }
    ]

    return array;
}