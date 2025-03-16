import LiliumProductTable from "@lilium/components/tables/productsTable";
import LiliumApi from "@lilium/bin/liliumAPI";
import LiliumButton from "@lilium/components/buttons";

const getProducts = async (page) => {
  const api = new LiliumApi();
  const params = new URLSearchParams({ skip: (Number(page) - 1) * 40, limit: 40 }).toString();
  return await api.get("/products/", params)
}

export default async function LiliumProducts(props) {
  const Props = await props;
  const products = await getProducts(await Props.searchParams);
  return (
    <main className="max-w-7xl ">
      <h1 className="text-2xl">Продукты</h1>
      <LiliumButton link={"/lilium/ecom/products/create"} className={"w-fit mb-4"} variant={"outline"}>Новый продукт</LiliumButton>
      <LiliumProductTable products={products.data} />
    </main>
  );
}
