
import "../globals.css";
export const metadata = {
  title: "WALMI - Lilium - админ панель",
  description: "Lilium AP является частью Lilium CMS. Помогает оперировать сайтами на базе NodeJS",
  robots: {
    index: false,
    follow: false,
  },
};

import LiliumLeftMenu from "@lilium/components/leftMenu";

export default async function RootLayout({ children }) {

  return (
    <>
      
      <div className="hidden lg:flex flex-row bg-neutral-200 min-h-[100vh] ]">
        <LiliumLeftMenu />
        <div className="min-h-[100vh] h-full px-4 w-full pt-5 ">
          {children}
        </div>
      </div>
      <div className="lg:hidden">
        <h2>Админ панель пока что не поддерживается на мобильных устройствах</h2>
      </div>
    </>
  );
}

