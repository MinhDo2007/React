import React, { Component } from 'react';
import WOW from "wowjs";
import './App.css';
// import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { translate } from 'react-i18next';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {content: (<div id="loading" />)}
  }
  componentDidMount() {
    new WOW.WOW({mobile: false}).init();
    setInterval(this.changeContent, 0);
  }

  changeContent = () => (
    this.setState({
      content: (
        <div className="App">
          {/* <Header /> */}
          <div>
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
          <Footer />
        </div>
      )
    })
  )

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
          {this.state.content}
        </div>
      </Router>
    );
  }
}

export default translate('common')(App);  
