// redux toolkit me hum har ek feature ke lie ek "slice" banate hai

import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  // we make multiple reducers here
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload); // we push new item in state
    },
  },
});

// redux toolkit feature
export const getItemSelector = createSelector(
  (state) => state.cart, // this csart is from store
  (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
