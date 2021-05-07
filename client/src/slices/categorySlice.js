import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: "",
  reducers: {
    setCategory: (state, action) => (state = action.payload),
    clearCategory: (state) => (state = ""),
  },
});

export const { setCategory, clearCategory } = categorySlice.actions;

export const selectCategory = (state) => state.category;

export default categorySlice.reducer;
