import { createSlice } from '@reduxjs/toolkit';

export type TItem = {
    img: string,
    title: string,
    id: string,
    price: number,
    rate: number,
    wireless: boolean;
    number: number,
};

export type TInitState = {
    headphones: Array<TItem>,
    cart: Array<TItem> | null,
    sum: number
};

const initialState: TInitState = {
    headphones: [],
    cart: [],
    sum: null,
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillShowcase(state, action) {
            state.headphones = action.payload;
        },
        addItemToCart(state, action) {
            state.cart.length ?
                state.cart.map((item) => (item.id === action.payload.id) ? { ...item, number: ++item.number } : state.cart.push(action.payload))
                :
                state.cart.push(action.payload);

            state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        },
        increaseNumber(state, action) {
            state.headphones.map((item) => (item.id === action.payload.id) ? ++item.number : item);
            state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        },
        decreaseNumber(state, action) {
            state.headphones.map((item) => (item.id === action.payload.id) ? --item.number : item);
            state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        },

    }
})

export default mainStore.reducer;
export const { fillShowcase, addItemToCart, increaseNumber, decreaseNumber } = mainStore.actions;