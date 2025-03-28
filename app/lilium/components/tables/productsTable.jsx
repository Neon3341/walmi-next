import Image from "next/image"
import LiliumTable from "."
import LiliumProductMainActions from "../products/mainActions";

export default function LiliumProductTable({ products }) {

    return (
        <LiliumTable>
            {products.map((child, i) => {
                return (
                    <div key={i} className="flex relative border border-neutral-200 px-2 py-1 gap-x-1">
                        <div className="w-16">
                            <Image alt="product image" className="w-16 h-16" width={100} height={100} src={child.media.thumbnail} />
                        </div>
                        <div className="w-[60%] grow flex flex-col">
                            <div>
                                <span className="text-base font-semibold">{child.title.ru} | </span> <span className="text-[12px]">{priceSpaces(child.price)} р</span>
                            </div>
                            <LiliumProductMainActions product={child}/>
                        </div>
                        <div className="w-[20%]"></div>
                    </div>
                )
            })}
        </LiliumTable>
    )
}

const priceSpaces = (price = "") =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
