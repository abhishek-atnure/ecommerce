import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import authSliceReducer from "./slices/authSlice";
import productSliceReducer from "./slices/productSlice";
import searchReducer from "./slices/searchSlice";
import categoryReducer from "./slices/categorySlice";
import sortbyReducer from "./slices/sortbySlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    users: userSliceReducer,
    auth: authSliceReducer,
    allProducts: productSliceReducer,
    search: searchReducer,
    category: categoryReducer,
    sortby: sortbyReducer,
    order: orderReducer,
    cart: cartReducer,
  },
});

export default store;
