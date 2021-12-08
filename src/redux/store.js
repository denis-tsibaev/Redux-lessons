import { configureStore } from '@reduxjs/toolkit';
import { catalogitemsReducer } from './catalogitemsReducer';
import catalogitems from '../Shop/catalogitems';

const preloadedState = {
    catalogitems,
};

export const store = configureStore({
    preloadedState,
    reducer: { catalogitems: catalogitemsReducer },
    devTools: process.env.NODE_ENV !== 'production',
});
