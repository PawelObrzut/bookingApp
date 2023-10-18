import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError, ErrorResponse } from '@apollo/client/link/error';
import url from '../apiURL/apiURL';

const errorLink = onError((error: ErrorResponse) => {
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach(({ message }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }
  if (error.networkError) {
    console.error(`Network Error: ${error.networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: `${url}/graphql`})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default client;