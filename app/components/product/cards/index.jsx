import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ProductCard({ variant = "", data }) {
    const [card, setCard] = useState(<></>);

    useEffect(() => {
        switch (variant) {
            case "micro":
                setCard(<MicroCard data={data} />)
                break;

            default:
                break;
        }
    }, [variant, data]);

    return (
        <div className="w-full">
            {card}
        </div>
    )
}

function MicroCard({ data }) {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (!container) return;

        const gallery = data.media.gallery || [];
        const galleryLength = gallery.length;
        if (galleryLength === 0) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        let index = Math.floor((x / width) * galleryLength);
        index = Math.min(index, galleryLength - 1);
        setCurrentIndex(index);
    };

    const handleMouseLeave = () => {
        setCurrentIndex(-1);
    };

    const imageSrc = currentIndex >= 0 
        ? data.media.gallery[currentIndex] 
        : data.media.thumbnail;

    return (
        <div className="w-full">
            <div 
                ref={containerRef}
                className="bg-white relative w-full rounded-xl" 
                style={{ paddingTop: '100%' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    alt="Product Image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    unoptimized
                    className="absolute top-0 left-0 rounded-xl"
                    src={imageSrc}
                />
                <div className="absolute w-full h-full top-0 right-0"></div>
            </div>
            <span className="font-bold text-xl">{priceSpaces(data.price)}</span>
            <span className="font-bold text-sm"> ₽</span>
        </div>
    );
}

const priceSpaces = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};