import { createSlice } from "@reduxjs/toolkit";
import { Repertoire_getRepertoire } from "../services/moviesServices/__generated__/Repertoire";
import { fetchRepertoire } from "../services/moviesServices";

const initialState = {
  repertoire: <Repertoire_getRepertoire[]>[],
  status: "idle",
  error: null,
};

const repertoire = createSlice({
  name: "RepertoireCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepertoire.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRepertoire.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repertoire = action.payload;
      })
      .addCase(fetchRepertoire.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default repertoire.reducer;