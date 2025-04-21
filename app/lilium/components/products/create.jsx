"use client"

import { useState } from "react"
import LiliumInput from "../input/input"
import LiliumTextarea from "../input/textarea"
import LiliumButton from "../buttons"
import LiliumApi from "@lilium/bin/liliumAPI"

export default function LiliumCreateProduct({ product }) {
    const [form, setForm] = useState({ title: "" })


    const prodBase = {
        "title": {
            "ru": "Письменный стол WALMI SOLO"
        },
        "description": {
            "ru": "Письменный стол SOLO на металлическом регулируемом основании с двумя полками в комплекте и столешницей из высококачественного ЛДСП - отличное решение для Вашего дома или офиса."
        },
        "price": 13000,
        "oldPrice": 14000,
        "modelId": "WalmiSolo34",
        "media": {
            "thumbnail": "https://ir.ozone.ru/s3/multimedia-1-l/wc1000/7010439897.jpg",
            "video": "",
            "gallery": [
                "https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7010439910.jpg",
                "https://ir.ozone.ru/s3/multimedia-1-k/wc1000/7010439896.jpg",
                "https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7010439911.jpg"
            ]
        },
        "categories": ["tables", "work_tables"],

    }
    const specs = {
        "color": ["Черный", "Белый", "Орех", "Дуб"],
        "width": [70, 80, 90, 100, 110, 120],
        "depth": [50, 60],
        "height": [60],
    }

    function generateAllCombinations(specs) {
        const keys = Object.keys(specs);
        const combinations = [];
        
        function generate(index, current) {
            if (index === keys.length) {
                combinations.push(current);
                return;
            }
            
            const key = keys[index];
            const values = specs[key];
            
            for (const value of values) {
                generate(index + 1, {...current, [key]: value});
            }
        }
        
        generate(0, {});
        return combinations;
    }
    
    const pizdecTovarovSozdadimScha = async () => {
        const api = new LiliumApi;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2M4MzY3ZjFmMjFjMTBiMGJkMjNlMTMiLCJleHBpcmVzQXQiOjE3NDM1OTYxNjYzNTgsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0Mjk5MTM2Nn0.0WyGz4QjSdjNa2Y_Mn9qhYXxl8A-1Vn0STpRWEJgo0w"; 

        const allSpecsCombinations = generateAllCombinations(specs);

        for (const spec of allSpecsCombinations) {
            const product = {
                ...prodBase,
                specs: spec
            };
            
            try {
                const response = await api.post('/products/', product, token);
              //  console.log(`Товар создан: ${JSON.stringify(spec)}`, response);
            } catch (error) {
                console.error(`Ошибка при создании товара: ${JSON.stringify(spec)}`, error);
            }
            
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        //console.log(`Всего создано товаров: ${allSpecsCombinations.length}`);
    };
    


    return (
        <div className="flex flex-col rounded-2xl bg-white">
            <div className="">

            </div>
            <div className="flex flex-col border border-neutral-200 px-2 py-1 gap-x-1">
                <LiliumInput value={form.title} onChange={(e) => { setForm((prev) => { return { ...prev, title: e.target.value } }) }} >
                    Название
                </LiliumInput>
                <LiliumTextarea value={form.description} onChange={(e) => { setForm((prev) => { return { ...prev, description: e.target.value } }) }} >
                    Описание
                </LiliumTextarea>
                <LiliumButton onClick={pizdecTovarovSozdadimScha} variant={"outline"} className={"text-[18px]"}>Магическое действие по созданию пачки товаров</LiliumButton>
            </div>
        </div>
    )
}