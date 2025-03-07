"use client"
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ product }) {
    const [activeImage, setActiveImage] = useState(-1);
    return (
        <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-x-4 gap-y-4 lg:px-4 lg:h-[350px] h-fit w-full">
            <div className="hidden lg:flex w-full lg:max-w-20 lg:overflow-y-auto overflow-y-hidden lg:overflow-x-hidden overflow-x-auto h-full lg:flex-col gap-2 hiddenScrollBar ">
                <div className="shrink-0  w-[25%] lg:w-full rounded-2xl overflow-clip flex justify-center items-center bg-neutral-100">
                    <Image onMouseEnter={() => setActiveImage(-1)} className="w-full" src={product.media.thumbnail} alt="thumb" unoptimized width={40} height={20} priority={true} />
                </div>
                {
                    product.media.gallery.map((child, i) => {
                        return (
                            <div key={i} className="shrink-0 w-[25%] lg:w-full rounded-2xl overflow-clip flex justify-center items-center bg-neutral-100">
                                <Image onMouseEnter={() => setActiveImage(i)} className="w-full" src={child} key={i} alt="thumb" unoptimized width={40} height={20} priority={false} />
                            </div>
                        )
                    })
                }
            </div>
            <div className=" relative lg:w-[100%] lg:h-full h-fit w-full rounded-2xl overflow-clip bg-red-200">
                <div className={`opacity-0 top-0 left-0 h-full w-full flex justify-center items-center transition-opacity`} >
                    <Image className="w-full" src={product.media.thumbnail} alt="thumb" unoptimized width={200} height={200} priority={true} />
                </div>
                <div className={`${activeImage == "-1" ? "opacity-100" : "opacity-0"} absolute top-0 left-0 h-full w-full flex justify-center items-center transition-opacity`} >
                    <Image className="w-full" src={product.media.thumbnail} alt="thumb" unoptimized width={200} height={200} priority={true} />
                </div>
                {
                    product.media.gallery.map((child, i) => {
                        return (
                            <div key={i} className={`${activeImage == i ? "opacity-100" : "opacity-0"} absolute top-0 left-0 h-full w-full flex justify-center items-center transition-opacity`} >
                                <Image className="w-full" src={child} key={i} alt="thumb" unoptimized width={200} height={100} priority={false} />
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="flex lg:hidden w-full lg:max-w-20 lg:overflow-y-auto overflow-y-hidden lg:overflow-x-hidden overflow-x-auto h-full lg:flex-col gap-2 hiddenScrollBar ">
                <div className="shrink-0  w-[25%] lg:w-full rounded-2xl overflow-clip flex justify-center items-center bg-neutral-100">
                    <Image onMouseEnter={() => setActiveImage(-1)} className="w-full" src={product.media.thumbnail} alt="thumb" unoptimized width={40} height={20} priority={true} />
                </div>
                {
                    product.media.gallery.map((child, i) => {
                        return (
                            <div key={i} className="shrink-0 w-[25%] lg:w-full rounded-2xl overflow-clip flex justify-center items-center bg-neutral-100">
                                <Image onMouseEnter={() => setActiveImage(i)} className="w-full" src={child} key={i} alt="thumb" unoptimized width={40} height={20} priority={false} />
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}