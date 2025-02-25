"use client"

import TestRedux from "@components/etc/testRedux";
import ReduxProvider from "@components/layouts/reduxProvider";

export default function Catalog() {
    return (
        <main>
            <ReduxProvider>
                <TestRedux />
            </ReduxProvider>
            Здесь будет Каталог...
        </main>
    );
}
