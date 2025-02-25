"use client"
import ReduxProvider from "@components/layouts/reduxProvider";
import SearchInput from "./searchInput";


export default function SearchBar({ }) {

    return (
        <ReduxProvider>
            <SearchInput />
        </ReduxProvider>
    )
} 