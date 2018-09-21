import React, { Component } from 'react';
import './../../css/Footer.css';
import Menu from './Menu';
import Content from './Content';

class Footer extends Component {
  render(){
    return (
      <footer className="page-footer font-small indigo mt-4" id="footer">
        <div className="container form-footer">
          <Menu />
          <hr className="rgba-white-light title" />
          <Content />
          <hr className="clearfix d-md-none rgba-white-light content" />
        </div>
      </footer>
    )
  }
}

export default Footer;
