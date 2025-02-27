import "./globals.css";
import Header from "@components/header";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};
import { Raleway } from "@next/font/google";
const raleway = Raleway();
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased ${raleway.className}`}
      >
        <Header />
          {children}
      </body>
    </html>
  );
}
