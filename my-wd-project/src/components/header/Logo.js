import React, { Component } from 'react';

class Logo extends Component {
  render(){
    return (
      <div>
        <img src={"/images/logo.jpg"} className="img-responsive" alt="" id="logo" />
      </div>
    )
  }
}

export default Logo;
