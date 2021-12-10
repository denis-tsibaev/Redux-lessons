import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartReducer';
import { catalogitemsReducer } from './catalogitemsReducer';

export const store = configureStore({
    reducer: {
        catalogitems: catalogitemsReducer,
        cart: cartReducer,
    },

    devTools: process.env.NODE_ENV !== 'production',
});
