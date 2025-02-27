"use client";
import Button from "@components/button/variantButton";
import ListIco from '@media/list.svg';
import { useSelector, useDispatch } from "react-redux";
import ReduxProvider from "@components/layouts/reduxProvider"; // Ensure ReduxProvider correctly provides the store
import { setCatalogDDMState } from "@storage/interfaceSlice";

export default function CatalogBtn() {
    return (
        <ReduxProvider>
            <Inner />
        </ReduxProvider>
    );
}

function Inner() {
    const catalogDDMState = useSelector((state) => state.interface.catalogDDMState);
    const dispatch = useDispatch();

    const onclick = () => {
        dispatch(setCatalogDDMState(!catalogDDMState));
        console.log(catalogDDMState);
    };

    return (
        <Button onClick={onclick} ico={ListIco} variant={"light"} className={"w-fit ml-4 font-semibold"}>
            Каталог
        </Button>
    );
}
