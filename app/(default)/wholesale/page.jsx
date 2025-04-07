import Button from "@components/button/variantButton";


export default async function OrderSuccessPage({ params }) {
    const { orderId } = await params;
    return (
        <main className="flex flex-col items-center ">
            <div className="lg:max-w-[80%] min-h-96 w-full lg:min-w-[600px] flex flex-col gap-y-4 justify-center">
                <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-2xl font-semibold ">Станьте оптовым клиентом Walmi</h1>
                    <p>Мы пока еще разрабатываем эту страницу!</p>
                </div>
                <Button variant={"outline"} link={"/"}>Вернуться на главную</Button>
            </div>
        </main>
    );
}
