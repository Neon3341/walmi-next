import "../globals.css";
import Header from "@components/header";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};

export default function RootLayout({ children }) {
  return (

    <div className="px-8 max-w-box-xl lg:my-10 mx-auto flex flex-col">
      {children}
    </div>

  );
}
