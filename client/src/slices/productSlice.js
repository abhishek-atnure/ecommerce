import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "./searchSlice";
import { selectCategory } from "./categorySlice";
import { selectSortby } from "./sortbySlice";

export const loadProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async () => {
    const data = await fetch("/api/products");
    const json = await data.json();
    return json;
  }
);

export const loadCategory = createAsyncThunk(
  "allProducts/getAllCategory",
  async () => {
    const data = await fetch("/api/category");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "allProducts",
  initialState: {
    products: [],
    isLoading: false,
    hasError: false,
    categoryList: [],
  },
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [loadCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCategory.fulfilled]: (state, action) => {
      state.categoryList = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const allProductsSlice = createSlice(sliceOptions);

export const selectAllProducts = (state) => state.allProducts.products;
export const selectAllCategory = (state) => state.allProducts.categoryList;

export const selectFilteredAllProducts = (state) => {
  const allProducts = selectAllProducts(state);
  const searchTerm = selectSearchTerm(state);
  const Category = selectCategory(state);
  const sortBy = selectSortby(state);

  const data = allProducts.filter((product) =>
    product.category_id.toString().includes(Category)
  );

  const finalData = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy === "") {
    return finalData;
  } else if (sortBy === "Lowest") {
    return finalData.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortBy === "Highest") {
    return finalData.sort(function (a, b) {
      return b.price - a.price;
    });
  }
};

export default allProductsSlice.reducer;
