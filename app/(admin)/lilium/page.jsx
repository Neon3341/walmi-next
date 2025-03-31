
import { Borel } from "next/font/google";
const borel = Borel({ 
  subsets: ['latin' ], 
  weight: ['400'],
});

export default function LiliumHome() {
  return (
    <main className="max-w-7xl flex flex-col gap-y-4">
      <div className="w-full rounded-2xl px-5 py-12 bg-indigo-100">
        <h2 className="text-4xl">Добро пожаловать в <span className={`${borel.className}`}>Lilium!</span></h2>
        <i>Walmi edition</i>
      </div>
      <div className="w-full rounded-2xl px-5 py-12 bg-neutral-100">
        <h2 className="text-2xl">Быстрые действия</h2>
        <span>Модуль в разработке</span>
        <div className="grid grid-cols-4 gap-x-4 mt-5">
          <div className=" rounded-2xl bg-neutral-200 py-2 px-4 cursor-pointer ">Добавить что-то</div>
          <div className=" rounded-2xl bg-neutral-200 py-2 px-4 cursor-pointer ">Добавить что-то</div>
          <div className=" rounded-2xl bg-neutral-200 py-2 px-4 cursor-pointer ">Добавить что-то</div>
          <div className=" rounded-2xl bg-neutral-200 py-2 px-4 cursor-pointer ">Добавить что-то</div>
        </div>
      </div>
    </main>
  );
}
