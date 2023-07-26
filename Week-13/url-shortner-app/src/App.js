import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
};

export default App;
