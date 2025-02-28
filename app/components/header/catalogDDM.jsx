"use client"
import ReduxProvider from "@components/layouts/reduxProvider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ApiCore from "@bin/api";
import Image from "next/image";

export default function CatalogDDM({ }) {

    return (
        <ReduxProvider>
            <CatalogDDMInner />
        </ReduxProvider>
    )
}

function CatalogDDMInner() {
    const [categories, setCategories] = useState([{ children: [] }]);
    const [chosenCat, setChosenCat] = useState(0);
    const [chosenSubCat, setChosenSubCat] = useState(0);
    const catalogDDMState = useSelector((state) => state.interface.catalogDDMState);
    useEffect(() => {
        fetchCategories().then(setCategories)
    }, []);

    const chooseCat = (e) => {
        setChosenSubCat(-1)
        setChosenCat(e.target.id)
    }

    const chooseSubCat = (e) => {
        setChosenSubCat(e.target.id)
    }

    return (
        <div className={`min-h-[650px] bg-white rounded-ee-2xl border border-sky rounded-es-2xl z-50 w-box-xl fixed top-16 py-5 px-7 gap-x-4 ${catalogDDMState ? "flex" : "hidden"}`}>
            <div className=" min-w-64 py-2">
                {categories.map((child, index) => {
                    return (
                        <div key={index} onMouseEnter={chooseCat} id={index} className={`py-3 px-8 rounded-xl  cursor-pointer ${chosenCat == index ? "bg-neutral-200" : ""}`}>
                            <h4 className="font-normal">{child.name}</h4>
                        </div>
                    );
                })}
            </div>
            <div className="min-w-64 bg-neutral-100 py-2 px-3 rounded-2xl">
                {categories[chosenCat]?.children.map((child, index) => {
                    return (
                        <div key={index} onMouseEnter={chooseSubCat} id={index} className={`py-3 px-8 rounded-xl  cursor-pointer ${chosenSubCat == index ? "bg-neutral-200" : ""}`}>
                            <h4 className="font-normal">{child.name}</h4>
                        </div>
                    );
                })}
            </div>
            <div className=" w-full flex">
                <div className="py-10 px-4 max-w-96 w-fit">
                    <h3 className="text-3xl">{categories[chosenCat]?.children[chosenSubCat]?.name || categories[chosenCat]?.name}</h3>
                    <p>{categories[chosenCat]?.children[chosenSubCat]?.description || categories[chosenCat]?.description}</p>
                </div>
                <div className="py-3 px-4 max-w-96">
                    {categories[chosenCat]?.children[chosenSubCat]?.media?.poster || categories[chosenCat]?.media?.poster ? 
                    <Image unoptimized className="max-w-96" width={380} height={500} 
                    src={categories[chosenCat]?.children[chosenSubCat]?.media?.poster || categories[chosenCat]?.media?.poster} alt="Фото категории"/> 
                    : ""}
                </div>
            </div>
        </div>
    )
}



const fetchCategories = async () => {
    const api = new ApiCore();
    //return api.get("/categories").catch(err => console.log(err));
    return [
        {
            name: "Столы",
            id: 100,
            description: "Неотъемлемая часть любой комнаты, от рабочего кабинета до кухни. В нашем ассортименте вы найдете столы для разных целей и стилей интерьера.",
            media: {
                thumb: "",
                poster: "https://mf78.ru/upload/thumbs/catalog/default/18_5ca338.png",
                video: ""
            },
            children: [
                {
                    name: "Рабочие столы",
                    id: 1000,
                    description: "Обеспечивают комфорт для работы и учебы, с удобными размерами и функциональными деталями. Они помогут создать эргономичное рабочее пространство в вашем доме или офисе.",
                    media: {
                        thumb: "",
                        poster: "https://meble-z-drewna.pl/img/ets_blog/post/38f01b366f-nowoczesne.jpg",
                        video: ""
                    }
                },
                {
                    name: "Обеденные столы",
                    id: 1001,
                    description: "Идеальный выбор для семейных ужинов и встреч с друзьями. У нас есть модели для разных размеров помещений и стилей интерьера.",
                    media: {
                        thumb: "",
                        poster: "https://i.pinimg.com/736x/4b/58/98/4b589859834755305f2ae12006465083.jpg",
                        video: ""
                    }
                },
                {
                    name: "Барные столы",
                    id: 1002,
                    description: "Создают атмосферу уюта и стиля в кухне или барной зоне. Они подходят как для вечеринок, так и для уютных ужинов.",
                    media: {
                        thumb: "",
                        poster: "https://d.scdn.gr/images/sku_main_images/023740/23740530/fixedratio_20220509150314_trapezi_mpar_120x60cm_lbt91x.jpeg",
                        video: ""
                    }
                },
                {
                    name: "Компьютерные столы",
                    id: 1003,
                    description: "Предназначены для комфортной работы за ПК, обеспечивая удобное размещение техники и аксессуаров. Они помогут организовать пространство и улучшить производительность.",
                    media: {
                        thumb: "",
                        poster: "https://meble-z-drewna.pl/img/ets_blog/post/38f01b366f-nowoczesne.jpg",
                        video: ""
                    }
                }
            ]
        },
        {
            name: "Хранение",
            id: 101,
            description: "Категория хранения включает в себя решения для упорядочивания вещей и создания порядка в доме. Вы найдете разнообразные тумбы, стеллажи и полки для хранения.",
            media: {
                thumb: "",
                poster: "https://avatars.mds.yandex.net/i?id=92fd8c75a5d0b06765691aeb38a7b634_l-10137108-images-thumbs&n=13",
                video: ""
            },
            children: [
                {
                    name: "Тумбы",
                    id: 1004,
                    description: "Это практичные предметы мебели для хранения вещей, которые подойдут для разных помещений. У нас есть модели с дополнительными функциями, такими как ящики или полки.",
                    media: {
                        thumb: "",
                        poster: "https://avatars.mds.yandex.net/i?id=540009ee36c85a40023733afcb668cf1_l-8211098-images-thumbs&n=13",
                        video: ""
                    }
                },
                {
                    name: "Стеллажи",
                    id: 1005,
                    description: "Помогают организовать пространство для хранения книг, документов или декора. Они могут быть как открытыми, так и закрытыми, в зависимости от ваших предпочтений.",
                    media: {
                        thumb: "",
                        poster: "https://laloft.ru/wp-content/uploads/2020/11/etagerkaA5.jpg",
                        video: ""
                    }
                },
                {
                    name: "Полки",
                    id: 1006,
                    description: "Это универсальные элементы для хранения и организации пространства в доме. Они подходят для размещения книг, украшений, техники и других предметов.",
                    media: {
                        thumb: "",
                        poster: "https://thumbs.dreamstime.com/b/empty-wood-shelf-white-background-soft-shadow-d-empty-wooden-shelves-white-wall-vector-illustration-empty-wood-shelf-123361304.jpg",
                        video: ""
                    }
                }
            ]
        }
    ]
}
