import WalmiApi from "@bin/walmiApi";
import Button from "@components/button/variantButton";
import ProductCard from "@components/product/cards";
import { Caveat } from "next/font/google";
import { useEffect, useState } from "react";
const caveat = Caveat({
    subsets: ['latin', 'cyrillic'], 
    display: 'swap',
});

export default function HSSlideOne({ }) {

    const [related, setRelated] = useState([]);
    useEffect(() => {
        fetchRelated().then((data) => setRelated(data));
    }, []);

    useEffect(() => {
        console.log(related);
    }, [related]);

    return (
        <div className="w-full bg-cappuccino rounded-xl h-fit lg:h-full flex flex-col py-5 lg:px-8 px-3 relative">
            <div className="w-fit absolute top-3 right-3">
                <Button link={"/catalog/"} className={`w-fit`} variant={"outline"}>Все товары</Button>
            </div>
            <span className={caveat.className}>Рекомендуем вам</span>
            {/* <h3 className={`text-[70px] font-bold -mt-3 ${raleway.className}`} >{related.title}</h3> */}
            <h3 className={`text-[50px] lg:text-[70px] font-bold lg:mt-3 mb-8 lg:pb-0 ${caveat.className}`} style={{ lineHeight: "42px" }}>Последние продукты</h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 w-full place-items-center">
                {
                    related?.map((child, index) => {
                        return (<ProductCard key={index} variant="micro" data={child} />)
                    })
                }

            </div>
        </div>
    )
}

const fetchRelated = async () => {
    const api = new WalmiApi;
    const params = new URLSearchParams({ limit: 6 }).toString();
    const result = await api.get("/products/", params);
    return result.data;
    const array = {
        title: "Стеллажи",
        category: 201,
        products: [
            {
                title: "Ruby Loft mk. 1.2",
                price: 8000,
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
                price: 9000,
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
                price: 8500,
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
    array.products = [...array.products, ...array.products];
    return array
}