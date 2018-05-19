import React, { Component } from 'react';
import './../../css/Nav.css';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Our Story',
    to: '/our-story',
    exact: false
  },
  {
    name: 'Bride',
    to: '/bride',
    exact: false
  },
  {
    name: 'Blog',
    to: '/blog',
    exact: false
  },
  {
    name: 'Seacrh',
    to: '/search',
    exact: false
  },
  {
    name: 'Other',
    to: '/other',
    exact: false
  },
  {
    name: 'Contact Us',
    to: '/contact-us',
    exact: false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={
        ({match})=>{
          var active = match ? 'active' : '';
          return (
            <li className={active}>
              <Link to={to}>{label}</Link>
            </li>
          )
        }
      }
    />
  )
}

class Nav extends Component {
  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index)=>{
        return <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
      })
    }
    return result;
  }

  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              {this.showMenus(menus)}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
