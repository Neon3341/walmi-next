import PreloadState from "@components/etc/preloadState";
import "./globals.css";
import Header from "@components/header";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};
import { Raleway } from "@next/font/google";
import MobileHeader from "@components/mobile/menu";
const raleway = Raleway();


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased ${raleway.className} pb-24 pt-6 lg:pb-0 lg:pt-0`}
      >
        <PreloadState />
        <MobileHeader />
        <Header />
          {children}
          
      </body>
    </html>
  );
}
