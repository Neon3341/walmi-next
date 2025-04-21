import "../globals.css";
import Header from "@components/header";
import MobileMenu from "@components/mobile/menu";
import MobileHeader from "@components/header/mobile";

import PreloadState from "@components/etc/preloadState";
import PreloadRefs from "@components/etc/preloadRefs";

import WalmiText from "@media/walmiText.png"

export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

import { Raleway, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <div className={`${raleway.className}`}>
      <PreloadState />
      <PreloadRefs />
      <MobileHeader />
      <MobileMenu />
      <Header />
      <div className="px-8 max-w-box-xl lg:my-10 mx-auto flex flex-col pb-24 pt-6 lg:pb-0 lg:pt-0">
        {children}
      </div>
      <div className="px-8  lg:mt-10  flex flex-col pt-24 lg:pt-0 lg:pb-0 bg-neutral-200">
        <div className={`max-w-box-xl w-full px-4 pt-10 mx-auto ${inter.className}`}>
          <h3 className="text-2xl font-semibold">Доставка по всей России</h3>
          <p>Чтобы заказать товар в магазине, вы можете оформить заказ на сайте или позвонить нам: +7 (919) 411 - 21 - 51</p>
          <Link href={"/delivery"}>
            <span className="underline">Подробнее</span>
          </Link>
        </div>
        <div className="w-full max-w-box-xl mx-auto h-[1px] bg-neutral-400 my-10"></div>
        <div className="w-full max-w-box-xl mx-auto flex flex-row justify-between">
          <div>
            <Image src={WalmiText} width={180} height={90} />
          </div>
          <div>
            <ul className="flex gap-x-3">
              <Link href={"/catalog"}><li>Каталог</li></Link>
              <Link href={"/catalog"}><li>Партнерам</li></Link>
              <Link href={"/catalog"}><li>Акции</li></Link>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-box-xl mx-auto h-[1px] bg-neutral-400 my-10"></div>
        <div className={`max-w-box-xl px-4 py-10 mx-auto ${inter.className} text-neutral-400`}>
          <p className="mb-5">© ООО «Бизнес Продакшн», 2018-2025. Адрес для направления юридически значимых сообщений: info@walmi.ru.</p>
          <p className="mb-20">
            Все ресурсы сайта walmi.ru, включая (но не ограничиваясь) текстовую, графическую, фотографическую и видео информацию, структуру, дизайн и оформление страниц, товарные знаки, доменное имя, фирменное наименование являются объектами авторского права и прав на интеллектуальную собственность, защищены российским законодательством и международными соглашениями об охране авторских прав и интеллектуальной собственности.
            Запрещается любое воспроизведение, в том числе использование, копирование, включение содержания страниц данного сайта и иных объектов в структуру других сайтов без предварительного согласия правообладателя. Запрещаются любые иные действия, в результате которых у пользователей Интернета может сложиться впечатление, что представленные материалы не имеют отношения к домену walmi.ru.
          </p>
        </div>

      </div>
    </div>
  );
}
