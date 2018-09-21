import React, { Component, Fragment } from 'react';
import Social from './Social';

class Content extends Component {
  render(){
    return (
      <Fragment>
        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
          <div className="col-md-8 col-12 mt-5">
            <p className="footer-content">THE END</p>
          </div>
        </div>
        <Social />
      </Fragment>
    )
  }
}

export default Content;
