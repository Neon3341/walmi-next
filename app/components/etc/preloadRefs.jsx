"use client";

import { useDispatch, useSelector } from "react-redux";
import ReduxProvider from "@components/layouts/reduxProvider";
import { setSpecs, setCategories } from "@storage/referenceSlice";
import { useEffect } from "react";
import WalmiApi from "@bin/walmiApi";

export default function PreloadRefs() {
    return (
        <ReduxProvider>
            <RefsLoader />
        </ReduxProvider>
    );
}

function RefsLoader() {
    const dispatch = useDispatch();
    useEffect(() => {

        const api = new WalmiApi;
        api.get('/products/specs').then((data) => dispatch(setSpecs(data.data))).catch(console.error);
        api.get('/products/categories').then((data) => dispatch(setCategories(data.data))).catch(console.error);

    }, []);

    return null;
}
