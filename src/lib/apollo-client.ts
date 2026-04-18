import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://www.msocorockers.co.za/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: WP_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default client;
