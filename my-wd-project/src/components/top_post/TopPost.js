import React, { Component } from 'react';
import './../../css/TopPost.css';

class TopPost extends Component {

  render() {
    var { children } = this.props;
    return (
      <div className="container" id="top-posts">
        <div className="mg-70">
          <img src="/images/green-flower.png" alt="" />
        </div>
        <div className="row">
          { children }
        </div>
      </div>
    );
  }
}

export default TopPost;
