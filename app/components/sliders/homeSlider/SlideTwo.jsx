import Button from "@components/button/variantButton";
import ProductCard from "@components/product/cards";
import { Caveat } from "next/font/google";
import { useEffect, useState } from "react";
const caveat = Caveat({
    subsets: ['latin', 'cyrillic'], 
    display: 'swap',
});

export default function HSSlideTwo({ }) {

    const [related, setRelated] = useState({ products: [] });
    useEffect(() => {
        fetchRelated().then(setRelated);
    }, []);

    return (
        <div className="w-full bg-emerald-200 rounded-xl h-full flex flex-col py-5 px-8 relative">
            <div className="w-fit absolute top-3 right-3">
                <Button className={`w-fit`} variant={"outline"}>Все товары</Button>
            </div>
            <span className={caveat}>Рекомендуем вам</span>
            <h3 className={`text-[70px] font-bold -mt-3 ${caveat.className}`} >{related.title}</h3>

            <div className="grid grid-cols-3 gap-x-3 gap-y-2 w-full place-items-center">
                {
                    related?.products.map((child, index) => {
                        return (<ProductCard key={index} variant="micro" data={child} />)
                    })
                }

            </div>
        </div>
    )
}

const fetchRelated = async () => {
    return {
        title: "Рабочие столы",
        category: 100,
        products: [
            {
                title: "Ruby Loft mk. 1.2",
                price: 14000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                        "https://a.allegroimg.com/original/11a1b5/9a01387f4b8e9a35a607b05f4fb6/Stol-duzy-rozkladany-140-180-cm-industrial-loft",
                        "https://i.pinimg.com/originals/36/e1/6c/36e16cafbbfc5f4373835b399c52faba.jpg",
                        "https://assets.thefurnish.ru/system/uploads/product_image/image/116231/fc0927afd75a4ffe4372187e9591be78.jpeg",
                    ]
                }
            }, {
                title: "Ruby Loft mk. 1.3",
                price: 12000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                        "https://a.allegroimg.com/original/11a1b5/9a01387f4b8e9a35a607b05f4fb6/Stol-duzy-rozkladany-140-180-cm-industrial-loft",
                    ]
                }
            }, {
                title: "Ruby Loft mk. 1.3",
                price: 10000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                    ]
                }
            }, {
                title: "Ruby Loft mk. 1.2",
                price: 14000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                        "https://a.allegroimg.com/original/11a1b5/9a01387f4b8e9a35a607b05f4fb6/Stol-duzy-rozkladany-140-180-cm-industrial-loft",
                        "https://i.pinimg.com/originals/36/e1/6c/36e16cafbbfc5f4373835b399c52faba.jpg",
                        "https://assets.thefurnish.ru/system/uploads/product_image/image/116231/fc0927afd75a4ffe4372187e9591be78.jpeg",
                    ]
                }
            }, {
                title: "Ruby Loft mk. 1.3",
                price: 12000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                        "https://a.allegroimg.com/original/11a1b5/9a01387f4b8e9a35a607b05f4fb6/Stol-duzy-rozkladany-140-180-cm-industrial-loft",
                    ]
                }
            }, {
                title: "Ruby Loft mk. 1.3",
                price: 10000,
                media: {
                    video: null,
                    thumbnail: "https://welding-heaven.ru/wp-content/uploads/2022/06/menli.jpg",
                    gallery: [
                        "https://avatars.mds.yandex.net/i?id=66c1045e693746e9a9564b4f051739d1_l-9156331-images-thumbs&ref=rim&n=13&w=600&h=600",
                    ]
                }
            },
        ]
    }
}