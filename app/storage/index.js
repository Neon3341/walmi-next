import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice';
import interfaceReducer from './interfaceSlice';
import localUserReducer from './localUserSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        interface: interfaceReducer,
        localUser: localUserReducer
    }
});

export default store;
