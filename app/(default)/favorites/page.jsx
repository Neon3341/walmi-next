import Button from "@components/button/variantButton";


export default async function favoritesPage() {
    return (
        <main className="flex flex-col items-center ">
            <div className="lg:max-w-[80%] min-h-96 w-full lg:min-w-[600px] flex flex-col gap-y-4 justify-center">
                <div className="flex flex-col items-center gap-x-2">
                    <h1 className="text-2xl font-semibold ">Избранные</h1>
                    <p>Мы пока еще разрабатываем их!</p>
                </div>
                <Button variant={"outline"} link={"/"}>Вернуться на главную</Button>
            </div>
        </main>
    );
}
