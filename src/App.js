import React, { Component } from 'react'
import Contacts from './components/elements/contact/Contacts'
import Navbar from './components/elements/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './Store'
import './styles/App.scss';
import Contact from './components/elements/contact/Contact';
import ContactsAdd from './components/elements/contact/ContactsAdd';
import EditContact from './components/elements/EditContact';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
       <div>
          <Navbar/>
          <div className="container">
            <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Contacts}/>
                  <Route exact path="/contacts/add" component={ContactsAdd}/>
                  <Route exact path="/contacts/edit/:id" component={EditContact}/>
                </Switch>
            </div>
          </div>
      </div>
       </Router>
      </Provider>
    )
  }
}
