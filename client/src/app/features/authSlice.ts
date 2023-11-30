import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../services/authServices/index';

const initialState = {
  access_token: '',
  status: "idle",
  error: null,
};

const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.access_token = action.payload.access_token;
      })
      .addCase(logIn.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default auth.reducer;