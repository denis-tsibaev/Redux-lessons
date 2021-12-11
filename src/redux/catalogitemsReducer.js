import { createReducer } from '@reduxjs/toolkit';
import { removeFromCatalog } from './actions';
import catalogItems from './catalogItems';

export const catalogitemsReducer = createReducer(catalogItems, {
    [removeFromCatalog]: (state, action) =>
        state.filter(el => el.id !== action.payload),
});
