import CatalogProductGrid from "@components/catalog/catalogGrid";
import CatalogFilters from "@components/catalog/filtersBar";
import CatalogTitleHelper from "@components/catalog/titleHelper";
import ReduxProvider from "@components/layouts/reduxProvider";

export default function Catalog() {
    return (
        <ReduxProvider>
            <div className="flex">
                <h1 className="text-3xl font-bold">Каталог |</h1>
                <CatalogTitleHelper />
            </div>
            <main className={`grid grid-cols-1 lg:flex gap-x-3 gap-y-10`}>
                {/* Всплывающее окно фильтров моб версии */}
                <div className="hidden"></div>
                {/* Фильтры пк версии */}
                <div className="hidden md:block py-5 w-1/4">
                    <CatalogFilters />
                </div>
                {/* Сетка каталога */}
                <div className="w-3/4">
                    <CatalogProductGrid />
                </div>
            </main>
        </ReduxProvider>
    );
}
