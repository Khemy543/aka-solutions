import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Ourservices from './pages/ourservices';

export const Routers =() => 
    <BrowserRouter>

    
        <Switch>
         <Route exact path='/' component={ Homepage } />
         <Route exact path='/ourservices' component={ Ourservices } />
         {/* <Route exact component={ Default } /> */}
        </Switch>
        </BrowserRouter>