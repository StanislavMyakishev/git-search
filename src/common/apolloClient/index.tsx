import { NormalizedCacheObject } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_ACCESS_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

export const client = new ApolloClient<NormalizedCacheObject>({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
