"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery({ product }) {
    const [activeImage, setActiveImage] = useState(-1);
    useEffect(() => {
      console.log(activeImage);
    }, [activeImage]);
    return (
        <div className="flex flex-row gap-x-4 px-4 h-[350px] ">
            <div className="max-w-20  overflow-y-auto h-full flex flex-col gap-y-2 hiddenScrollBar ">
                <div className="min-h-20 max-h-20 w-full rounded-2xl flex justify-center items-center bg-green-200">
                    <Image onMouseEnter={() => setActiveImage(-1)} className="w-full" src={product.media.thumbnail} alt="thumb" unoptimized width={40} height={100} priority={true} />
                </div>
                {
                    product.media.gallery.map((child, i) => {
                        return (
                            <div key={i}  className=" w-full min-h-20 max-h-20 rounded-2xl flex justify-center items-center bg-green-200">
                                <Image onMouseEnter={() => setActiveImage(i)} className="w-full" src={child} key={i} alt="thumb" unoptimized width={40} height={100} priority={false} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="relative w-[350px] h-full bg-green-200 rounded-2xl">
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
        </div>
    )
}