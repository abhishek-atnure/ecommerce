import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cartFetch = createAsyncThunk(
  "cart/addProducts",
  async ({ cart_id, product_id }, thunkAPI) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          cart_id,
          product_id,
        }),
      });
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const changeQuant = createAsyncThunk(
  "cart/changeQuant",
  async ({ quantity, product_id, cart_id }, thunkAPI) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity, product_id, cart_id }),
    };
    await fetch("/api/cart", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
);

export const singleCartFetch = createAsyncThunk(
  "cart/getCart",
  async (cart_id, thunkAPI) => {
    try {
      const data = await fetch(`/api/cart/${cart_id}`);
      const response = await data.json();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const removeOneProduct = createAsyncThunk(
  "cart/removeOneProduct",
  async ({ cart_id, product_id }, thunkAPI) => {
    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          cart_id,
          product_id,
        }),
      });
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (cart_id, thunkAPI) => {
    try {
      console.log(cart_id);
      const response = await fetch(`/api/cart/${cart_id}`, {
        method: "DELETE",
      });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }
);

const sliceOptions = {
  name: "cart",
  initialState: {
    cartProducts: [],
    total: "",
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [singleCartFetch.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [singleCartFetch.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [singleCartFetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [changeQuant.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [changeQuant.fulfilled]: (state, action) => {
      state.quantity = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [changeQuant.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const cartSlice = createSlice(sliceOptions);

export const {
  addToCart,
  changeItemQuantity,
  calculateTotal,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cartProducts;
export const selectTotal = (state) => state.cart.total;
export default cartSlice.reducer;
