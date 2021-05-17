import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AggieNavbar from "./components/AggieNavbar";
import ReportsIndex from './pages/ReportsIndex';
import GroupsIndex from './pages/GroupsIndex';
import axios from "axios";


class App extends Component {

  render() {
      const App = () => (
        <div>
          <AggieNavbar></AggieNavbar>
          <Switch>
            <Route exact path='/' component={ReportsIndex}/>
            <Route path='/reports' component={ReportsIndex}/>
              {/* @ts-ignore*/}
            <Route path='/incidents' component={GroupsIndex}/>
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
