import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/product.interface";
import { RootState } from "./store";

interface SearchState {
  products: Product[];
}

const initialState: SearchState = {
  products: [],
};

export const fetchSearchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    try {
      const url = `https://dummyjson.com/products?limit=100`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      return error.message;
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default searchSlice.reducer;
export const selectState = (state: RootState) => state.search.products;
