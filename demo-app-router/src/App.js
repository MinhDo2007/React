import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} component={route.main} exact={route.exact} />
      })
    }
    return result;
  }
}

export default App;
