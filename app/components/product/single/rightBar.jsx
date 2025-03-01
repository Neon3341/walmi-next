import Image from "next/image";

import Heart from '@media/heart.svg'
import HeartFill from '@media/heart-fill.svg'
import Button from "@components/button/variantButton";

export default function RightBar({ product }) {
    return (
        <div className="flex flex-col relative">
            <div className="sticky top-24 right-0 w-full flex flex-col gap-y-5">
                <div className="rounded-2xl w-full shadow-md pl-2 pr-5 py-2 bg-neutral-100 flex justify-between items-center cursor-pointer hover:bg-pink-100 duration-300 transition-colors">
                    <div className="flex items-center  gap-x-4">
                        <Image src={"https://cdn-icons-png.flaticon.com/512/6426/6426621.png"} width={50} height={50} />
                        <span className="text-lg font-semibold">Весенние скидки</span>
                    </div>
                    <span className="font-bold text-sm">15 дней до конца </span>
                </div>
                <div className="rounded-2xl w-full shadow-md px-5 py-2 bg-neutral-100 flex flex-col gap-y-4">
                    <div className="flex items-end gap-x-3 justify-between">
                        <div className="ml-3">
                            <p className="font-bold text-[30px] text-green-600 rounded-2xl w-fit">{priceSpaces(product.price)}  <span className="text-base">₽</span></p>
                            <p className="line-through">{priceSpaces(product.oldPrice)}  ₽</p>
                        </div>
                        <div className="p-6 bg-blue-200 rounded-2xl">Тут будут бэйджи Яндекса</div>
                    </div>
                    <div className="flex justify-center items-center h-72 bg-blue-200 rounded-2xl">Тут будет модуль Яндекс Сплита</div>
                    <div className="grid grid-cols-6 gap-x-2">
                        <Button className={"col-span-4 font-semibold py-3"} variant={"sky"}>В корзину</Button>
                        <Button className={"col-span-2 py-3"} variant={"outline"} ico={Heart}></Button>
                    </div>
                </div>
                <div className="rounded-2xl w-full shadow-md px-5 py-2 bg-neutral-100 flex flex-col">
                    <h2 className="font-semibold text-lg">Доставка:</h2>
                    <div className="flex justify-center items-center h-52 bg-green-200 rounded-2xl">Тут будет модуль Доставки</div>
                </div>
            </div>
        </div>
    )
}

const priceSpaces = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
