import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './common/routerConstants';
import NotFound from './pages/notFound';
import SearchPage from './pages/searchPage';

const Routes = (): ReactElement => (
    <>
        <Switch>
            <Route exact path={routes.root} component={SearchPage} />
            <Route path={routes.notFound} component={NotFound} />
        </Switch>
    </>
);

export default Routes;
