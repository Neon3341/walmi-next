import CartRightSide from "@components/cart/calc";
import CartLeftSide from "@components/cart/cart";
import GetQuantity from "@components/cart/quantity";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="lg:max-w-[80%] w-full lg:min-w-[600px] flex flex-col gap-y-4">
        <div className="flex items-end gap-x-2">
          <h1 className="text-2xl">Корзина |</h1><span>Всего: <GetQuantity /> </span>
        </div>
        <div className="lg:grid lg:grid-cols-6 lg:gap-x-3 flex flex-col">
          <CartLeftSide />
          <CartRightSide />
        </div>
      </div>
    </main>
  );
}
