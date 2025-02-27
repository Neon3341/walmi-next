import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catalogDDMState: false,
};

const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        setCatalogDDMState(state, action) {
            state.catalogDDMState = action.payload;
        },
    },
});

export const { setCatalogDDMState } = interfaceSlice.actions;
export default interfaceSlice.reducer;