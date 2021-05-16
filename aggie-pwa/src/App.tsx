import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from "./components/Navbar";
import ReportsIndex from './pages/ReportsIndex';
import IncidentsIndex from './pages/IncidentsIndex';

class App extends Component {
  render() {
    const App = () => (
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={ReportsIndex}/>
            <Route path='/incidents' component={IncidentsIndex}/>
          </Switch>
        </div>
    )
    return (
        <Switch>
          <App/>
        </Switch>
    );
  }
}

export default App;
