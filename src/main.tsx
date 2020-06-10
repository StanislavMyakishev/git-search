import { ApolloProvider } from '@apollo/react-hooks';
import { NormalizedCacheObject } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { History } from 'history';
import * as React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';

interface MainProps<TCache> {
    client: ApolloClient<TCache>;
    history: History;
}

const Main: React.FC<MainProps<NormalizedCacheObject>> = ({
    client,
    history,
}) => {
    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <Routes />
            </Router>
        </ApolloProvider>
    );
};

export default Main;
