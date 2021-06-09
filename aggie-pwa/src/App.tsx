import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@yaireo/tagify/dist/tagify.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import AggieNavbar from "./components/AggieNavbar";
import ReportsIndex from './pages/ReportsIndex';
import GroupsIndex from './pages/GroupsIndex';
import SourcesIndex from "./pages/SourcesIndex";
import UsersIndex from "./pages/UsersIndex";
import UserProfile from "./pages/UserProfile";
import TagsIndex from "./pages/TagsIndex";
import Configuration from "./pages/Configuration";

class App extends Component {
  render() {
      const App = () => (
        <div>
          <AggieNavbar></AggieNavbar>
          <Switch>
            <Route exact path='/' component={ReportsIndex}/>
            <Route path='/reports' component={ReportsIndex}/>
            <Route path='/incidents' component={GroupsIndex}/>
            <Route path='/sources' component={SourcesIndex}/>
            <Route path='/users' component={UsersIndex}/>
            <Route path='/user/:id' component={UserProfile}/>
            <Route path='/tags' component={TagsIndex}/>
            <Route path='/config' component={Configuration}/>
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
