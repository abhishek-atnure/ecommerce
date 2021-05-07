import { createSlice } from "@reduxjs/toolkit";

export const sortbySlice = createSlice({
  name: "sortby",
  initialState: "",
  reducers: {
    setSortby: (state, action) => (state = action.payload),
    clearSortby: (state) => (state = ""),
  },
});

export const { setSortby, clearSortby } = sortbySlice.actions;

export const selectSortby = (state) => state.sortby;

export default sortbySlice.reducer;
