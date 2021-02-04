import { ApolloClient, InMemoryCache } from '@apollo/client';

const authToken = process.env.REACT_APP_API_KEY;

export const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: `bearer ${authToken}`,
	},
	cache: new InMemoryCache(),
});
