import "../globals.css";
import Header from "@components/header";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased `}
      >
        <Header />
        <div className="px-8 max-w-box-xl my-10 mx-auto flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
