import { configureStore } from "@reduxjs/toolkit"; // replace with createStore
import myCartReducer from "./slices/CartSlice"; // we give any name to this hook

export const store = configureStore({
  reducer: {
    // here we store all the reducers
    cart: myCartReducer,
  },
});
