import { configureStore } from "@reduxjs/toolkit"; // replace with createStore
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    // here we store all the reducers
    cart: cartSlice,
  },
});
