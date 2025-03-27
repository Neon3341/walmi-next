

export default async function OrderSuccessPage({ params }) {
    const { orderId } = await params;
    return (
        <main className="flex flex-col items-center ">
            <div className="lg:max-w-[80%] min-h-96 w-full lg:min-w-[600px] flex flex-col gap-y-4 justify-center">
                <div className="flex flex-col items-end gap-x-2">
                    <h1 className="text-2xl font-semibold text-green-500">Заказ успешно создан</h1>
                    <p>Ваш заказ:</p>
                    <span>{orderId}</span>
                </div>
                <div className="flex flex-col gap-x-2">
                    <p>Наш менеджер в скором времени свяжется с Вами по указанному номеру!</p>
                </div>
            </div>
        </main>
    );
}
