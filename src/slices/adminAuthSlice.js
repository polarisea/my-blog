import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// Create an async thunk for the login API
export const login = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/auth/refresh-token", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Create a slice for the login state
const adminAuthSlice = createSlice({
  name: "admin-auth",
  initialState: {
    status: "idle",
    user: null,
    error: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken"); // Clear accessToken from localStorage
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken; // Save accessToken
        state.freshToken = action.payload.freshToken; // Save freshToken
        localStorage.setItem("accessToken", action.payload.accessToken); // Save accessToken to localStorage
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload : "Login failed";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken; // Update accessToken
        localStorage.setItem("accessToken", action.payload.accessToken); // Update accessToken in localStorage
      })
      .addCase(refreshToken.rejected, (state) => {
        state.accessToken = null;
      });
  },
});

export const { logOut } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
