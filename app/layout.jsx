
import "./globals.css";
import Metrika from "./yandexMetrika";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Metrika className="absolute bottom-[100rem]" enabled={analyticsEnabled} />
      <body
        className={`antialiased  `}
      >
          {children}
      </body>
    </html>
  );
}
