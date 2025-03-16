import "../globals.css";
export const metadata = {
  title: "Walmi - вход",
  description: "Вход на сайт Walmi",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (

    <div className="px-8 max-w-box-xl lg:my-10 mx-auto flex flex-col">
      {children}
    </div>

  );
}
