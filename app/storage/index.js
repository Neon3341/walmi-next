import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice';
import interfaceReducer from './interfaceSlice';
import localUserReducer from './localUserSlice';
import referenceReducer from "./referenceSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        interface: interfaceReducer,
        localUser: localUserReducer,
        refs: referenceReducer
    }
});

export default store;
