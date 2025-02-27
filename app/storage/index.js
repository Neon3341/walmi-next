import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice';
import interfaceReducer from './interfaceSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        interface: interfaceReducer
    }
});

export default store;
