import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';

import { client } from './common/apolloClient';
import Main from './main';

export const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Main client={client} history={history} />
    </React.StrictMode>,
    document.getElementById('root'),
);
