import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';

export const Routers =() => 
    <BrowserRouter>

    
        <Switch>
         <Route exact path='/' component={ Homepage } />
         {/* <Route exact component={ Default } /> */}
        </Switch>
        </BrowserRouter>