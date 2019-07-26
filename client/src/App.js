import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import SignUpForm from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUpForm} />
        <Redirect to='/'/>
      </Switch>
    </Router>
  )
}

export default App;


