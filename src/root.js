import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';

class Root extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default Root;