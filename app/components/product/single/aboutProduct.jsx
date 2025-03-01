import ProductVariantSelector from "@components/product/single/productVariantSelector";
import RatingStars from "../ratingStars";

export default function AboutProduct({ product }) {
    return (
        <div className="flex flex-col h-fit">
            <div>
                <h1 className="font-bold text-xl">{product.title}</h1>
                <div className="flex gap-x-1 cursor-pointer">
                    <span>{product.rating.rating[0]},{product.rating.rating[1]}</span>
                    <RatingStars rating={product.rating.rating} />
                    <span>({product.rating.rates})</span>
                </div>
            </div>
            <div>
                <ProductVariantSelector variants={product.variants} variantsNames={product.variantsNames} specs={product.specs} />
                Характеристики и другие полезные вещи
            </div>
        </div>
    )
}
