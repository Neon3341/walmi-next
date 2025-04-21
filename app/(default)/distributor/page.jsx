import Button from "@components/button/variantButton";
import { Raleway, Inter } from "next/font/google";
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default async function DistributorPage({ }) {
    return (
        <main className="flex flex-col items-center">
            <div className="lg:grid lg:grid-cols-2 flex flex-col  w-full">
                <div className="py-5 px-8">
                    <h1 className="mb-8 text-3xl font-bold">Walmi - Партнерам</h1>
                    <p className="mb-8">Walmi.ru — международный мебельный бренд. <br />
                        Собственные производственные линии, представительства на территории РФ.
                        <br />
                        Мебель на заказ с индивидуальными параметрами изготовим от 7 дней. </p>
                    <h3 className="text-xl font-semibold">Приглашаем к сотрудничеству: </h3>
                    <ul className="ml-4 mt-2 gap-y-2 flex flex-col text-xl">
                        <li className="w-fit">Дилеров</li>
                        <li className="w-fit">Дизайнеров</li>
                        <li className="w-fit">Архитекторов</li>
                        <li className="w-fit">Предпринимателей</li>
                    </ul>
                </div>
                <div className="self-end">
                    <div className="bg-neutral-500 rounded-2xl flex items-center justify-center w-box-m h-box-m">
                        <span className="text-white">Image placeholder 720x720</span>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <p className="text-center text-2xl font-semibold">Присоединяйтесь к Walmi.ru <br />
                    Индивидуальные предложения для каждого.</p>

            </div>
            <div className="mt-24 grid grid-cols-2 gap-x-5 gap-y-8">
                <div className="rounded-2xl border border-cappuccino py-4 px-3"  id="dialers"> 
                    <h2 className="mb-2 text-2xl font-bold">Дилерам</h2>
                    <ul className="ml-5 list-disc">
                        <li>Предоставление бренда walmi.ru</li>
                        <li>Выгодная цена закупки — ниже оптовой</li>
                        <li>Широкий трендовый ассортимент</li>
                        <li>Предоставление обучения по продукту и продажам</li>
                        <li>Рекомендации по дизайн-проекту магазина</li>
                        <li>Магазин без ограничений на количество брендов (монобренд или мультибренд)</li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-cappuccino py-4 px-3"  id="dialers">
                    <h2 className="mb-2 text-2xl font-bold">Архитекторам и Дизайнерам</h2>
                    <ul className="ml-5 list-disc">
                        <li>Предоставляем 3D-модели</li>
                        <li>Личный сервис-менеджер</li>
                        <li>Широкий трендовый ассортимент</li>
                        <li>Цветовые палитры</li>
                        <li>Материалы</li>
                        <li>Online-журнал</li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-cappuccino py-4 px-3"  id="dialers"> 
                    <h2 className="mb-2 text-2xl font-bold">Комплектация под ключ</h2>
                    <ul className="ml-5 list-disc">
                        <li>Индивидуальный подход</li>
                        <li>Проектируем мебель под ваши потребности</li>
                        <li>Разработка дизайн-проекта</li>
                        <li>Своё конструкторское бюро</li>
                        <li>Собственная логистика и сборка</li>
                        <li>Работа по 44-ФЗ и 223-ФЗ</li>
                        <li>Сертифицированные материалы СЭС и ГОСТ</li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-cappuccino py-4 px-3"  id="dialers">
                    <h2 className="mb-2 text-2xl font-bold">Малый Опт</h2>
                    <ul className="ml-5 list-disc">
                        <li> Укомплектуем ваше помещение готовым ассортиментом</li>
                        <li>1000+ товаров на сайте, каталог 3D-моделей</li>
                        <li>Отправка образцов тканей и материалов</li>
                        <li>Собственная логистика и сборка</li>
                        <li>Личный проект-менеджер 24/7</li>
                    </ul>
                </div>
            </div>
            <div className="mt-24">
                <p className={`text-center text-2xl font-semibold ${inter.className}`}>Позвоните нам:<br />
                    +7 (919) 411 - 21 - 51</p>

            </div>
        </main>
    );
}
