import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';


export default function Routes(){
    return (
        //Route deixa mais de uma rota ao mesmo tempo, switch previne esse comportamento, so podendo chamar uma de cada vez.
        <BrowserRouter>
            <Switch>
                <Route path='/' exat component={Login}/>
                <Route path='/Dashboard' component={Dashboard}/>
                <Route path='/New' component={New}/>
            </Switch>
        </BrowserRouter>
    );
}