import { ApolloProvider } from '@apollo/react-hooks';
import { NormalizedCacheObject } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { History } from 'history';
import * as React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './common/theme';
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
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </Router>
        </ApolloProvider>
    );
};

export default Main;
