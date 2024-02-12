import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/product.interface";
import { RootState } from "./store";

interface SearchState {
  search: Product[];
}

const initialState: SearchState = {
  search: [],
};

export const fetchSearchProducts = createAsyncThunk<Product[]>(
  "products/fetchSearchProducts",
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
      console.log(error);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export default searchSlice.reducer;
export const selectState = (state: RootState) => state.search.search;
