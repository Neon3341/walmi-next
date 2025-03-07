import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    name: null,
    cart:  [], //корзина хранится только локально, до введения пользователей.
    favorites:  [], //избранные хранятся только локально, до введения пользователей.
};

const localUserSlice = createSlice({
    name: 'localUser',
    initialState,
    reducers: {
        setId(state, action) {
            state.id = action.payload;
        },
        setName(state, action) {
            state.name = action.payload;
        },
        setCart(state, action) {
            state.cart = action.payload;
            localStorage.setItem('cart', JSON.stringify(action.payload));
        },
        setFavorites(state, action) {
            state.favorites = action.payload;
            localStorage.setItem('favorites', JSON.stringify(action.payload));
        },
    },
});

export const { setId, setName, setCart, setFavorites } = localUserSlice.actions;
export default localUserSlice.reducer;