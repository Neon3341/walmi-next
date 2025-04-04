import CatalogProductGrid from "@components/catalog/catalogGrid";
import CatalogFilters from "@components/catalog/filtersBar";
import CatalogTitleHelper from "@components/catalog/titleHelper";
import ReduxProvider from "@components/layouts/reduxProvider";

export default function Catalog() {
    return (
        <ReduxProvider>
            <div className="hidden lg:flex">
                <h1 className="sticky text-3xl font-bold">Каталог |</h1>
                <CatalogTitleHelper />
            </div>
            <main className={`flex flex-col lg:flex-row gap-x-3 gap-y-10 `}>
                {/* Фильтры */}
                <div className="py-5 lg:w-1/4 sticky top-0 z-50 bg-white ">
                    <div className="flex lg:hidden mb-4">
                        <h1 className="text-3xl font-bold">Каталог |</h1>
                        <CatalogTitleHelper />
                    </div>
                    <CatalogFilters />
                </div>
                {/* Сетка каталога */}
                <div className="bg-white  lg:w-3/4">
                    <CatalogProductGrid />
                </div>
            </main>
        </ReduxProvider>
    );
}
