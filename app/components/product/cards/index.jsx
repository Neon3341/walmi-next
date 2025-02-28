import Image from "next/image";
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
      <Card data={data} config={config} />
    </div>
  );
}

function Card({ data, config }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const containerRef = useRef(null);
  const { gallery = [] } = data.media;
  
  const { handleMouseMove, handleMouseLeave } = useImageHover({
    containerRef,
    gallery,
    setCurrentIndex,
  });

  const imageSrc = currentIndex >= 0 ? gallery[currentIndex] : data.media.thumbnail;

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full rounded-xl ${config.containerClasses}`}
        style={{ paddingTop: '100%' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <ProductImage src={imageSrc} />
      </div>
      
      <ProductInfo data={data} config={config} />
    </div>
  );
}

function ProductImage({ src }) {
  return (
    <Image
      alt="Product Image"
      layout="fill"
      objectFit="contain"
      objectPosition="center"
      unoptimized
      className="absolute top-0 left-0 rounded-xl"
      src={src}
    />
  );
}

function ProductInfo({ data, config }) {
  return (
    <>
      {config.showTitle && (
        <p className="font-semibold text-lg leading-5 line-clamp-2">{data.title}</p>
      )}
      <Price price={data.price} />
    </>
  );
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
  const handleMouseMove = (e) => {
    if (!containerRef.current || gallery.length === 0) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const index = Math.floor((x / rect.width) * gallery.length);
    
    setCurrentIndex(Math.min(index, gallery.length - 1));
  };

  const handleMouseLeave = () => setCurrentIndex(-1);

  return { handleMouseMove, handleMouseLeave };
};

const priceSpaces = (price) => 
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');