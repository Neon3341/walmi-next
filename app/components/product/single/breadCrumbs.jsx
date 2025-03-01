import Link from "next/link";

export default function BreadCrumbs({ product }) {
    return (
        <div className="flex gap-x-1 items-center  w-full py-1">
            <Link href={"/"}>
                <span className="bg-neutral-200 px-2 rounded-lg cursor-pointer">WALMI</span>
            </Link>
            {product.categories.map((child, i) => {
                return (
                    <Link key={i} href={`/catalog/category/${child.id}`}>
                        <span className="bg-neutral-200 px-2 rounded-lg">{child.title}</span>
                    </Link>
                )
                {/* <div className="h-1 w-1 bg-neutral-400 rounded-2xl"></div> */ }
            })}
        </div>
    )
}