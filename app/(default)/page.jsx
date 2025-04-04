import ProductGrid from "@components/layouts/productGrid";
import HomeSlider from "@components/sliders/homeSlider";


export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="hidden lg:block">
          <HomeSlider />
          <ProductGrid page={1} />
        </div>

        <div className="col-span-2">

          <ProductGrid quantity={12} page={2} cols={6} />
          <ProductGrid quantity={12} page={3} cols={6} />
          <ProductGrid quantity={12} page={4} cols={6} />

        </div>
      </div>
    </main>
  );
}
