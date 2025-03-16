
import "./globals.css";
export const metadata = {
  title: "Walmi - Производитель современной мебели",
  description: "Официальный магазин фабрики-производителя Walmi. Здесь вы найдете исключительно оригинальные товары бренда Walmi.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased  `}
      >
          {children}
      </body>
    </html>
  );
}
