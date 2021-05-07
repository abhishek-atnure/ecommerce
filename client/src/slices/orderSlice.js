import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const makeOrder = createAsyncThunk(
  "order/makeOrder",
  async ({ cart_id, user_id, address, time }, thunkAPI) => {
    try {
      const response = await fetch(`/api/cart/${cart_id}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id,
          address,
          time,
        }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "order/fetchOrder",
  async (user_id, thunkAPI) => {
    try {
      const response = await fetch(`/api/order/${user_id}`);
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const sliceOptions = {
  name: "order",
  initialState: {
    orders: [],

    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [makeOrder.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [makeOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [makeOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const orderSlice = createSlice(sliceOptions);
export const selectAllOrders = (state) => state.order.orders;
export default orderSlice.reducer;
