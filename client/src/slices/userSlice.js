import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ user_name, password }, thunkAPI) => {
    try {
      const data = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name,
          password,
        }),
      });
      const json = await data.json();

      localStorage.setItem("token", json.token);
      if (json.token) {
        window.location = "/";
        toast.success("Logged in sucessfully !");
      }
      toast.error(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, user_name, contact_num, password }, thunkAPI) => {
    try {
      const data = await fetch("/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          user_name,
          contact_num,
          password,
        }),
      });
      const json = await data.json();
      localStorage.setItem("token", json.token);
      if (json.token) {

        toast.success("Registered Sucessfully...");
        localStorage.removeItem("token");
      }

      return json;
    } catch (error) {
      toast.error("already exists")
      console.error(error.message);
    }
  }
);

export const fetchByToken = createAsyncThunk(
  "users/fetchByToken",
  async (arg, thunkAPI) => {
    try {
      const data = await fetch("/api/auth/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const json = await data.json();
      return json;
    } catch (error) {
      toast.error("Please try again ");
      console.error(error.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  "users/editProfile",
  async ({ id, name, user_name, contact_num, password }, thunkAPI) => {
    try {
      const body = JSON.text({ name, user_name, contact_num, password });

      const data = await axios.patch(`/api/users/${id}`, body);
    } catch (error) {
      console.error(error.message);
    }
  }
);

const sliceOptions = {
  name: "users",
  initialState: {
    token: "",
    cart_id: "",
    contact_num: "",
    user_email: "",
    user_id: "",
    user_name: "",
    isLoading: false,
    hasError: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [signupUser.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchByToken.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchByToken.fulfilled]: (state, action) => {
      state.cart_id = action.payload[0].cart_id;
      state.contact_num = action.payload[0].contact_num;
      state.user_email = action.payload[0].user_email;
      state.user_id = action.payload[0].user_id;
      state.user_name = action.payload[0].user_name;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchByToken.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const userSlice = createSlice(sliceOptions);
export const { clearState } = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.users;
export const cart = (state) => state.users.cart_id;
export const user = (state) => state.users.user_id;
