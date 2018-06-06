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
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
