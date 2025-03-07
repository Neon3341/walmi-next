import CartLeftSide from "@components/cart/cart";
import GetQuantity from "@components/cart/quantity";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[80%] w-full min-w-[600px] flex flex-col gap-y-4">
        <div className="flex items-end gap-x-2">
          <h1 className="text-2xl">Корзина |</h1><span>Всего: <GetQuantity /> </span>
        </div>
        <div className="grid grid-cols-6 gap-x-3">
          <CartLeftSide />
          <div className="col-span-2 bg-amber-100">Оформление</div>
        </div>
      </div>
    </main>
  );
}
