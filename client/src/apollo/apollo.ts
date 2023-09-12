import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError, ErrorResponse } from '@apollo/client/link/error';

const errorLink = onError((error: ErrorResponse) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(({ message, locations, path }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }
  if (error.networkError) {
    console.error(`Network Error: ${error.networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:8000/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default client;