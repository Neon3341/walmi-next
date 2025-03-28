import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const variantsConfig = {
    micro: {
        containerClasses: "bg-white",
        showTitle: false,
    },
    small: {
        containerClasses: "bg-neutral-100/70",
        showTitle: true,
    },
};

export default function ProductCard({ variant = "micro", data }) {
    const config = variantsConfig[variant] || variantsConfig.micro;

    return (
        <div className="w-full cursor-pointer">
            <Link href={`/catalog/product/${data._id}`}>
                <Card data={data} config={config} />
            </Link>

        </div>
    );
}

function Card({ data, config }) {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const containerRef = useRef(null);
    const { gallery = [] } = data.media;

    const { handleMouseMove, handleMouseLeave, handleTouchMove, handleTouchEnd } = 
    useImageHover({
      containerRef,
      gallery,
      setCurrentIndex,
    });

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className={`relative w-full rounded-xl ${config.containerClasses}`}
                style={{ paddingTop: '100%', touchAction: 'none' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchStart={(e) => e.preventDefault()}
            >
                <ProductImage
                    src={data.media.thumbnail}
                    visible={currentIndex === -1}
                />
                {gallery.map((src, index) => (
                    <ProductImage
                        key={`${src}-${index}`}
                        src={src}
                        visible={currentIndex === index}
                        lazy={true}
                    />
                ))}
            </div>
            <div className="relative">
                <ImageDots quantity={gallery.length + 1} index={currentIndex + 1} />
            </div>
            <ProductInfo data={data} config={config} />
        </div>
    );
}

function ProductImage({ src, visible, lazy = false }) {
    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
            }}
        >
            <Image
                alt="Product Image"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                unoptimized
                className="rounded-xl"
                src={src}
                priority={!lazy}
            />
        </div>
    );
}

function ProductInfo({ data, config }) {
    return (
        <>
            {config.showTitle && (
                <p className="font-semibold text-lg leading-5 line-clamp-2">{data.title.ru}</p>
            )}
            <Price price={data.price} />
        </>
    );
}

function ImageDots({ quantity, index }) {
    let array = [];
    for (let i = 0; i < quantity; i++) {
        array.push(i)
    }
    return (
        <div className="absolute -top-3 w-full justify-center flex gap-x-1">
            {
                array.map((child, i) => {
                    return <div key={i} data-pos={child} className={`${child == index ? "w-3 bg-neutral-600" : "w-1 bg-neutral-400"} h-1 rounded-2xl transition-all`}></div>
                })
            }
        </div>
    )
}

function Price({ price }) {
    return (
        <span className="font-bold text-xl">
            {priceSpaces(price)}
            <span className="text-sm"> ₽</span>
        </span>
    );
}

const useImageHover = ({ containerRef, gallery, setCurrentIndex }) => {
    const handleMove = (clientX) => {
      if (!containerRef.current || gallery.length === 0) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const index = Math.floor((x / rect.width) * gallery.length);
      setCurrentIndex(Math.min(index, gallery.length - 1));
    };
  
    const handleMouseMove = (e) => {
      handleMove(e.clientX);
    };
  
    const handleTouchMove = (e) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      handleMove(touch.clientX);
      e.preventDefault();
    };
  
    const handleMouseLeave = () => setCurrentIndex(-1);
    const handleTouchEnd = () => setCurrentIndex(-1);
  
    return { 
      handleMouseMove, 
      handleMouseLeave, 
      handleTouchMove, 
      handleTouchEnd 
    };
  };
  

const priceSpaces = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');