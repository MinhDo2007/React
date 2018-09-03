import React, { Component } from 'react';
import './../../css/Header.css';
import Logo from './Logo';
import Search from './Search';

class Header extends Component {
  render(){
    return (
      <div className="page-header">
        <div className="header">
          <Logo />
          <img src={"/images/heart.png"} className="img-responsive" alt="" id="heart" />
          <Search />
        </div>
      </div>
    )
  }
}

export default Header;
