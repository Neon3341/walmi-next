import "../globals.css";
import Header from "@components/header";
import MobileMenu from "@components/mobile/menu";
import MobileHeader from "@components/header/mobile";

import PreloadState from "@components/etc/preloadState";

export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

import { Raleway } from "@next/font/google";
const raleway = Raleway();

export default function RootLayout({ children }) {
  return (
    <div className={`${raleway.className}`}>
      <PreloadState />
      <MobileHeader />
      <MobileMenu />
      <Header />
      <div className="px-8 max-w-box-xl lg:my-10 mx-auto flex flex-col pb-24 pt-6 lg:pb-0 lg:pt-0">
        {children}
      </div>
    </div>
  );
}
