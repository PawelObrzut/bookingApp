import gql from "graphql-tag";

export const LOGIN = gql`
  mutation loginUser($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
      user {
        username
        id
      }
    }
  }
`;