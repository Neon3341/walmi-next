"use client"

import ProductCard from "@components/product/cards";

export default function ProductGridStatic({ variant = "small", cols = 3, products}) {

    return (
        <div className={`w-full  grid grid-cols-2 min-h-[120vh]  lg:grid-cols-${cols} gap-x-3 gap-y-10 py-5 px-3 lg:px-8`}>
            {products?.map((child, index) => (
                <ProductCard key={index} variant={variant} data={child} />
            ))}
        </div>
    )
}
