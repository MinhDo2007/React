import React, { Component } from 'react';
import './../../css/Header.css';
import Logo from './Logo';
import Search from './Search';

class Header extends Component {
  render(){
    return (
      <div className="page-header container">
        <div className="row header">
          <div className="col-md-5"><Logo /></div>
          <img src={"/images/heart.png"} className="img-responsive col-md-2" alt="" id="heart" />
          <div className="col-md-5"><Search /></div>
        </div>
      </div>
    )
  }
}

export default Header;
