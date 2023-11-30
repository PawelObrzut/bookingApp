/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: loginUser
// ====================================================

export interface loginUser_login_user {
  __typename: "User";
  username: string;
  /**
   * Example field (placeholder)
   */
  id: number;
}

export interface loginUser_login {
  __typename: "LoginResponse";
  /**
   * JSON Web Token
   */
  access_token: string;
  user: loginUser_login_user;
}

export interface loginUser {
  login: loginUser_login;
}

export interface loginUserVariables {
  loginInput: LoginInput;
}
