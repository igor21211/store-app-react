import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { CART_STATE } from "./cart.slice";
import { saveState } from "./storage";
import productSlice from "./product.slice";
import searchSlice from "./search.slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    search: searchSlice,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart, CART_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
