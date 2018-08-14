import React, { Component } from 'react';
import './../../css/SlideShow.css';
import WOW from "wowjs";

class SlideShow extends Component {
  componentDidMount(){
    new WOW.WOW({mobile: false}).init();
  }

  render() {
    var {children} = this.props;

    return (
      <div>
        <div id="myCarousel" className="carousel slide">
          { children }
        </div>
      </div>
    );
  }
}

export default SlideShow;
