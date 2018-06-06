import React, { Component } from 'react';
import './../../css/Gallery.css';

class Gallery extends Component {
  render(){
    var {children} = this.props;
    return (
      <div className="container" id="gallery">
        {children}
      </div>
    )
  }
}

export default Gallery;
