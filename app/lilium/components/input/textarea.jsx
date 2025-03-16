"use client"
export default function LiliumTextarea({ value, onChange, children }) {
    return (
        <div className="flex flex-col">
            <label>{children}</label>
            <textarea className="border-neutral-400 border"  value={value} onChange={onChange} />
        </div>
    )
}