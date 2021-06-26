import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./views/pages/Home";
import Search from "./views/pages/Search";

const Routes = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/search/:category/:query'} component={Search}/>
        </Switch>
    )
}


export default Routes;