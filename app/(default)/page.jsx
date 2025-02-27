import HomeSlider from "@components/sliders/homeSlider";


export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2">
        <HomeSlider />
        <div></div>
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
