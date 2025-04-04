import ProductGrid from "@components/layouts/productGrid";
import HomeSlider from "@components/sliders/homeSlider";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="hidden lg:grid lg:grid-cols-2 grid-cols-1">
          <HomeSlider />
          <ProductGrid page={1} />
        </div>

        <div className="">

          <ProductGrid quantity={12} page={2} cols={6} />
          <ProductGrid quantity={12} page={3} cols={6} />
          <ProductGrid quantity={12} page={4} cols={6} />

        </div>
      </div>
    </main>
  );
}
