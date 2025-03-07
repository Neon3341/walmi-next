import RightBar from "@components/product/single/rightBar";
import AboutProduct from "@components/product/single/aboutProduct";
import BreadCrumbs from "@components/product/single/breadCrumbs";
import Gallery from "@components/product/single/gallery";
import WalmiApi from "@bin/walmiApi";


export default async function ProductPage({ params }) {
    const { productId } = await params;
    const product = await getProduct(productId);
    return (
        <main>
            <div className="hidden lg:flex lg:flex-row flex-col">
                <BreadCrumbs product={product} />
                <div className="flex gap-x-1 items-center  w-full lg:justify-end py-1 flex-wrap">
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">Артикул: {productId}</span>
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">В сравнение</span>
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">Поделиться</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 gap-x-4">
                <div className="lg:col-span-2 grid lg:grid-cols-2 grid-cols-1 gap-x-4">
                    <Gallery product={product}/>
                    <AboutProduct product={product} />
                    <div className="hidden lg:block lg:col-span-2 bg-yellow-100 w-full mt-12 h-72">
                        <h2 className="font-semibold text-2xl">Ещё может подойти</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-2 bg-yellow-100 w-full mt-12 h-60">
                        <h2 className="font-semibold text-2xl">О товаре</h2>
                    </div>
                    <div className="hidden lg:block lg:col-span-2 bg-yellow-100 w-full mt-12 h-96">
                        <h2 className="font-semibold text-2xl">Отзывы</h2>
                    </div>
                </div>
                <RightBar product={product} />
            </div>
            <div className="flex lg:hidden lg:flex-row flex-col">
                <BreadCrumbs product={product} />
                <div className="flex gap-x-1 items-center  w-full lg:justify-end py-1 flex-wrap">
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">Артикул: {productId}</span>
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">В сравнение</span>
                    <span className="bg-neutral-200 px-2 mb-1 rounded-lg">Поделиться</span>
                </div>
            </div>
            <div className=" bg-green-100 w-full mt-12 h-[70rem]">
                Бесконечная сетка
            </div>
        </main>
    );
}




const getProduct = async (productId) => {

    const api = new WalmiApi;
    const response = await api.get(`/products/${productId}/`);
    console.log(response);
    return response.data;
    return {
        title: "Hoff Loft - Письменный стол",
        price: 18000,
        oldPrice: 19000,
        id: 17343424,
        rating: {
            rating: "48", // 10 - 50
            rates: 421,
        },
        categories: [
            {
                title: "Столы",
                id: 100
            },
            {
                title: "Рабочие столы",
                id: 1000
            }
        ],
        specs: {
            color: {
                id: 5112,
                type: "Цвет",
                value: "Черный"
            },
            width: {
                id: 1234241,
                type: "Ширина",
                value: 120
            },
            length: {
                id: 123565,
                type: "Длина",
                value: 80
            },
        },
        variantsNames: {
            color: "Цвет",
            width: "Ширина",
            length: "Длина",
        },
        variants: [
            {
                id: 17343422,
                diffSpecs: {
                    color: "Черный",
                    width: 120,
                    length: 60,
                }
            },
            {
                id: 17343423,
                diffSpecs: {
                    color: "Черный",
                    width: 120,
                    length: 80,
                }
            },
            {
                id: 17343425,
                diffSpecs: {
                    color: "Черный",
                    width: 140,
                    length: 80,
                }
            },
            {
                id: 17343426,
                diffSpecs: {
                    color: "Белый",
                    width: 140,
                    length: 80,
                }
            }
        ],
        media: {
            thumbnail: "https://hoff.ru/upload/iblock/438/han9ddtna27u4jscus5kmawxxsqvyfvc.jpg",
            video: null,
            gallery: [
                "https://hoff.ru/upload/iblock/2f6/0u2zm3hw99pzfce517az7p25qs6fdjf5.jpg",
                "https://hoff.ru/upload/iblock/ce5/c6z2uyxb0mo2qww7hnqjv3gljb2mb5ab.jpg",
                "https://hoff.ru/upload/iblock/406/50kvic51gnx6195x3e6vzhmuwmfykn3a.jpg",
                "https://hoff.ru/upload/iblock/7f9/10w9ifgz4uvcvlriroafl00wzehhmljv.jpg",
            ]
        }
    }
}