import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';

import Main from './pages/Main'

const Routes = () => {

    return (

        
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/customer/:id" component={CustomerPage}/>
            </Switch>
        

    )
    
}

export default Routes;

