import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/apollo";
import { LOGIN } from "./queries";
import { loginUser_login } from "../authServices/__generated__/loginUser";

interface ILogIn {
  username: string,
  password: string,
} 

export const logIn = createAsyncThunk(
  'logIn',
  async (loginInput: ILogIn) => {
    const response = await client.mutate({
      mutation: LOGIN,
      variables: {
        loginInput: {
          username: loginInput.username,
          password: loginInput.password,
        }
      }
    })
    console.log('thunk:::', response.data.login);
    return response.data.login as loginUser_login;
  });