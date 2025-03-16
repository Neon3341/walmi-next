export default function LiliumTable({ children }) {
    return (
        <div className="flex flex-col w-full rounded-2xl bg-white overflow-clip">
            {children}
        </div>
    )
}