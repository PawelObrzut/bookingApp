import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/authServices";

const initialState = {
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded",
        state.token = action.payload.access_token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export default authSlice.reducer;
