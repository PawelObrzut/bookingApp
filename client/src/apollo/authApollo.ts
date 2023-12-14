import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import url from '../apiURL/apiURL';
import { store } from '../app/store';

const httpLink = createHttpLink({
  uri: `${url}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = store.getState().auth.access_token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const authClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default authClient;