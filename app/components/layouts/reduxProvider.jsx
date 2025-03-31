"use client"
import { Provider } from "react-redux";
import storage from "@storage/index.js";

export default function ReduxProvider({ children }) {
    return (
        <Provider store={storage}>
            {children}
        </Provider>
    )
}