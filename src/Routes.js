import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Results from './Results.js';
//import Result from './Result.js';
import Login from './Login.js';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/results' component={Results}/>
                <Route path='/login' component={Login}/>
            </Switch>
        );
    }
}

export default Routes;

