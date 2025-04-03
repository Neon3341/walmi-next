import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    categories: [],
    filters: {}
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setCategories(state, action) {
            state.categories = action.payload;
        },
        setFilters(state, action) {
            state.filters = action.payload;
        },
    },
});

export const { setSearch, setCategories, setFilters } = searchSlice.actions;
export default searchSlice.reducer;