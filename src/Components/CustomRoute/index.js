import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import isAuth from '../User/isAuth';

import App from '../../App';
import NotFound from '../../Pages/NotFound';
import Biscoito from '../../Pages/Biscoito';
import Nutri from '../../Pages/Nutri';
import Chronometer from '../../Pages/Cronometro';

const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        //For now I am just validating if user is logged, but there is a list of moduleAccess, which I'll
        //be able to make a filter and check that
        
        <Route {...rest} render={props => (
            isAuth.Check() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname:'/', state: {from: props.location}}} />
            )
        )} />
    )
}

const CustomRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={App} />
                <PrivateRoute exact={true} path="/biscoito" component={Biscoito} />
                <PrivateRoute exact={true} path="/cronometro" component={Chronometer} />
                <PrivateRoute exact={true} path="/nutri" component={Nutri} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default CustomRoute;