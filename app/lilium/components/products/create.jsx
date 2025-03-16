"use client"

import { useState } from "react"
import LiliumInput from "../input/input"
import LiliumTextarea from "../input/textarea"

export default function LiliumCreateProduct({ product }) {
    const [form, setForm] = useState({ title: "" })


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
            </div>
        </div>
    )
}