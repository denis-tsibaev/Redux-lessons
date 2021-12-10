import { createReducer } from '@reduxjs/toolkit';
import { addToCart } from './actions';

export const cartReducer = createReducer([], {
    [addToCart]: (state, { payload }) => [...state, payload],
});
