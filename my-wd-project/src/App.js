import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  showContentMenus =(routes) => {
    var result = '';
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Nav />
            <div>
              <div className="row">
                {this.showContentMenus(routes)}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
