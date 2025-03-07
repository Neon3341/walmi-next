
export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[80%] w-full min-w-[600px] flex flex-col gap-y-4">
        <div className="flex items-end gap-x-2">
          <h1 className="text-2xl">Корзина |</h1><span>N товаров</span>
        </div>
        <div className="grid grid-cols-6 gap-x-3">
          <div className="col-span-4 bg-indigo-100">Сама корзина</div>
          <div className="col-span-2 bg-amber-100">Оформление</div>
        </div>
      </div>
    </main>
  );
}
