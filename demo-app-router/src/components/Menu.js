import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: "About",
    to: "/about",
    exact: false
  },
  {
    name: "Products",
    to: "/products",
    exact: false
  },
  {
    name: "Login",
    to: "/login",
    exact: false
  }
]
const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
  return (
    <Route
      path={to} exact={activeOnlyWhenExact} children={({match})=>{
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {
  showMenu = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
        return <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
      })
    }
    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            {this.showMenu(menus)}
            {/*
              <NavLink exact to="/">Home</NavLink>
              <NavLink activeStyle={{backgroundColor: 'white', color: 'red'}} exact to="/">Home</NavLink>
              <Link exact to="/">Home</Link>
              <a href="/">Home</a>
            */}
            {/*
              <NavLink to="/about">About</NavLink>
              <NavLink activeStyle={{backgroundColor: 'white', color: 'red'}} to="/about">About</NavLink>
              <Link to="/about">About</Link>
              <a href="/about">About</a>
            */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
