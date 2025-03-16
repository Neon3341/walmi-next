import LiliumApi from "@lilium/bin/liliumAPI";
import LiliumButton from "@lilium/components/buttons";
import LiliumCreateProduct from "@lilium/components/products/create";

// const getProducts = async (page) => {
//   const api = new LiliumApi();
//   const params = new URLSearchParams({ skip: (Number(page) - 1) * 40, limit: 40 }).toString();
//   return await api.get("/products/", params)
// }

export default async function LiliumProductsCreate(props) {
  // const Props = await props;
  // const products = await getProducts(await Props.searchParams);
  return (
    <main className="max-w-7xl ">
      <h1 className="text-2xl">Новый продукт</h1>
      <LiliumButton link={"/lilium/ecom/products"} className={"w-fit mb-4"} variant={"outline"}>Отмена</LiliumButton>
      <LiliumCreateProduct />
    </main>
  );
}
