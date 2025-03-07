import Image from "next/image";

export default function E404({ }) {
    return (
        <div className="flex w-full min-h-[50vh] flex-col justify-center items-center gap-y-7">

            <div className="flex gap-x-5">
                <h1 className="text-[150px] font-bold">404</h1>
                <Image src={"https://a.d-cd.net/tyRjY8VGF_yf07SXBFx8CNuw_hI-960.jpg"} alt="404" width={200} height={50} unoptimized />
            </div>
            <h1 className="text-2xl font-bold">Страница не найдена</h1>
            <p className="text-center">К сожалению, страницы на которую вы перешли больше нет, возможно она <br />
                переехала или просто удалена. (ну или никогда не существовала)</p>
        </div>
    )
}