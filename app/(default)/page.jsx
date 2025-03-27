import ProductGrid from "@components/layouts/productGrid";
import HomeSlider from "@components/sliders/homeSlider";


export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <HomeSlider />
        <ProductGrid />
      </div>
    </main>
  );
}
