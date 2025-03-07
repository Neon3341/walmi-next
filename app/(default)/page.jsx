import ProductGrid from "@components/layouts/productGrid";
import HomeSlider from "@components/sliders/homeSlider";


export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <HomeSlider />
        <ProductGrid />
      </div>

      Главная страница
      <div className="h-96 w-5 bg-sky">
        <p>Filler</p>
      </div>
      <div className="h-96 w-5  bg-sky">
        <p>Filler</p>
      </div>
      <div className="h-96 w-5  bg-sky">
        <p>Filler</p>
      </div>
      <div className="h-96 w-5  bg-sky">
        <p>Filler</p>
      </div>
    </main>
  );
}
