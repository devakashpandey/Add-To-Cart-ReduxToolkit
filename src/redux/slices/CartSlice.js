// redux toolkit me hum har ek feature ke lie ek "slice" banate hai

import { createSlice } from "@reduxjs/toolkit";

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

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
