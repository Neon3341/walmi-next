import Button from "@components/button/variantButton";
import CartRightSide from "@components/cart/calc";
import OrderForm from "@components/forms/order";

export default async function OrderPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="lg:max-w-[80%] w-full lg:min-w-[600px] flex flex-col gap-y-4">
        <div className="flex items-end gap-x-2">
          <h1 className="text-2xl">Оформление заказа</h1>
        </div>
        <Button variant={"outline"} link={"/cart"}>Вернуться в корзину</Button>
        <OrderForm />
        <CartRightSide showButton={false} />
      </div>
    </main>
  );
}
