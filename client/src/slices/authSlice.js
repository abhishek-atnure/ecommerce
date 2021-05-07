import { createSlice } from "@reduxjs/toolkit";

const sliceOptions = {
  name: "auth",
  initialState: {
    auth: false,
  },
  reducers: {
    authenticated: (state) => {
      state.auth = true;
    },
    notAuthenticated: (state) => {
      state.auth = false;
    },
  },
};

export const authSlice = createSlice(sliceOptions);

export const { authenticated, notAuthenticated } = authSlice.actions;
export default authSlice.reducer;

export const authSelector = (state) => state.auth;
