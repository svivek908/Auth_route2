import React, { Component } from 'react'
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Login from './components/Login';

import ProtectedRoute from './components/ProtectedRoute'
import Notefound from './components/Notefound';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
        <Switch>
        <Route exact path="/" component={Login}/>
        
        <ProtectedRoute exact path="/Dashboard" component={Dashboard}/>
         </Switch>
        </Router>
      </div>
    )
  }
}
