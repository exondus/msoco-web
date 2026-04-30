import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Use local API proxy to avoid CORS issues with WordPress GraphQL
const GRAPHQL_URL = typeof window !== 'undefined'
  ? '/api/graphql'
  : (process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://www.msocorockers.co.za/graphql');

const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
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
