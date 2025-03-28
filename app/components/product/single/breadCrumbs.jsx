"use client"
import Link from "next/link";
import ReduxProvider from '@components/layouts/reduxProvider';
import { useSelector } from "react-redux";

function BreadCrumbsInner({ product }) {
    const { categories } = useSelector((state) => state.refs);
    return (
        <div className="flex gap-x-1 items-center  w-full py-1">
            <Link href={"/"}>
                <span className="bg-neutral-200 px-2 rounded-lg cursor-pointer">WALMI</span>
            </Link>
            {product.categories.map((child, i) => {
                return (
                    <Link key={i} href={`/catalog/category/${child}`}>
                        <span className="bg-neutral-200 px-2 rounded-lg">{categories.find(item => item.slug === child)?.title?.ru || child}</span> 
                        {/* Тут надо добавить подгрузку названия с сервера */}
                    </Link>
                )
                {/* <div className="h-1 w-1 bg-neutral-400 rounded-2xl"></div> */ }
            })}
        </div>
    )
}

const BreadCrumbs = ({ product = {}}) => {

  return (
    <ReduxProvider>
      <BreadCrumbsInner
        product={product} 
      />
    </ReduxProvider>
  )
}

export default BreadCrumbs;