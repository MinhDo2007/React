import React, { Component } from 'react';
import './../../css/SlideShow.css';

class SlideShow extends Component {
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
