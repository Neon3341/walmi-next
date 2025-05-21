
import "./globals.css";
import Metrika from "./yandexMetrika";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

import Image from "next/image";
import Link from "next/link";


import WalmiText from '@media/walmiText.png'
import WalmiFavi from '@media/favi.png'

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Metrika className="absolute bottom-[100rem]" enabled={analyticsEnabled} />
      <body
        className={`antialiased  `}
      >
        <div className="w-full h-[100vh] flex justify-center content-center z-50 absolute bg-neutral-500/70 backdrop-blur-lg">
          <div className="flex-row justify-center content-center">
            <div className="bg-neutral-200 w-[420px] h-auto p-7 rounded-2xl ">
              <Link href={"/"} className="flex flex-row items-center w-36 lg:w-48">
                <Image src={WalmiFavi} alt="Logo" width={40} className="w-10 hidden lg:block" />
                <Image src={WalmiText} alt="Logo" width={160} className="min-w-40" />
              </Link>
              <h1 className="text-2xl">Ведутся технические работы</h1>
              <span>Приносим свои извинения за предоставленные неудобства.</span>
              <br />
              <br />
              <span>Позвоните нам:</span>
              <a href="tel:+79194112151" className="hover:text-blue-700 text-blue-900 transition-all">
                <h3 className="text-xl">+7 (919) 411 - 21 - 51</h3>
              </a>
            </div>
          </div>

        </div>
        {children}
      </body>
    </html>
  );
}
