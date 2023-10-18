import { createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../../apiURL/apiURL";
import { Icredentials } from "../../types/types";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: Icredentials) => {
  const JWT = await fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((accessToken) => (accessToken))
    .catch((err) => {
      throw err;
    });
  if (JWT) {
    return JWT;
  }
  return null;
});
