import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Main from './views/Main';
import Login from './views/Login';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes