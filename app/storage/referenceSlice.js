import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    specs: []
};

const referenceSlice = createSlice({
    name: 'refs',
    initialState,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload;
            //console.log(action.payload);
        },
        setSpecs(state, action) {
            state.specs = action.payload;
            //console.log(action.payload);
        },
    },
});

export const { setCategories, setSpecs } = referenceSlice.actions;
export default referenceSlice.reducer;