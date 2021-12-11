import { createReducer } from '@reduxjs/toolkit';
import {
    addToCart,
    decrementCartItem,
    incrementCartItem,
    removeFromCart,
} from './actions';

export const cartReducer = createReducer([], {
    [addToCart]: (state, { payload }) => {
        if (state.some(el => el.id === payload.id)) {
            return state.map(el => {
                if (el.id === payload.id) {
                    const elCopy = { ...el };
                    elCopy.count += 1;
                    elCopy.total = elCopy.count * elCopy.price;
                    return elCopy;
                }

                return el;
            });
        }

        const cartItem = { ...payload };
        cartItem.count = 1;
        cartItem.total = cartItem.price;

        return [...state, cartItem];
    },

    [removeFromCart]: (state, { payload }) =>
        state.filter(el => el.id !== payload),

    [incrementCartItem]: (state, { payload }) =>
        state.map(el => {
            if (el.id === payload) {
                const elCopy = { ...el };
                elCopy.count += 1;
                elCopy.total = elCopy.count * elCopy.price;

                return elCopy;
            }
            return el;
        }),

    [decrementCartItem]: (state, { payload }) =>
        state.map(el => {
            if (el.id === payload) {
                const elCopy = { ...el };

                console.log(elCopy.count);
                console.log(elCopy);

                if (elCopy.count === 1) {
                    return elCopy;
                }

                elCopy.count -= 1;
                elCopy.total = elCopy.count * elCopy.price;

                return elCopy;
            }

            return el;
        }),
});
