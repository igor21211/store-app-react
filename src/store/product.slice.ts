import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "../interfaces/product.interface";

interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | undefined;
}

interface FetchProductsParams {
  category?: string;
  limit?: number;
  id?: number;
}

export const fetchProducts = createAsyncThunk<
  Product[],
  FetchProductsParams,
  {
    rejectValue: string;
  }
>("products/fetchProducts", async (params /* { rejectWithValue } */) => {
  try {
    const { category, limit } = params;
    const url = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
      : `https://dummyjson.com/products?limit=${limit}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
});

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.items = action.payload;
          state.error = undefined;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload as string; // Use explicit type assertion
        },
      );
  },
});

export default productSlice.reducer;

export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;
