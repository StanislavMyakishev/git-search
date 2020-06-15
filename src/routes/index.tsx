import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../pages/notFound';
import Search from '../pages/search';
import routes from './routerConstants';

const Routes = (): ReactElement => (
    <>
        <Switch>
            <Route exact path={routes.root} component={Search} />
            <Route path={routes.notFound} component={NotFound} />
        </Switch>
    </>
);

export default Routes;
