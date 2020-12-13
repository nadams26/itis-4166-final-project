import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup from './Signup/Signup';
import Navigationmenu from './Navigationmenu/NavigationMenu';

function App() {
  return (
    <Router>
      <div className = "appContainer">
      <Navigationmenu/>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
