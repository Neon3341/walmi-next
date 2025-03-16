"use client"
export default function LiliumInput({ value, onChange, type = "text", children }) {
    return (
        <div className="flex flex-col">
            <label>{children}</label>
            <input className="border-neutral-400 border" type={type} value={value} onChange={onChange} />
        </div>
    )
}