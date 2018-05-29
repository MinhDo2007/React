import React, { Component } from 'react';

class Social extends Component {
  render(){
    return(
      <div className="row pb-3">
        <div className="col-md-12">

          <div className="mb-5 flex-center">
            <a className="social-ic">
              <i className="fa fa-facebook fa-lg white-text mr-4"> </i>
            </a>
            <a className="social-ic">
              <i className="fa fa-twitter fa-lg white-text mr-4"> </i>
            </a>
            <a className="social-ic">
              <i className="fa fa-google-plus fa-lg white-text mr-4"> </i>
            </a>
            <a className="social-ic">
              <i className="fa fa-linkedin fa-lg white-text mr-4"> </i>
            </a>
            <a className="social-ic">
              <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
            </a>
            <a className="social-ic">
              <i className="fa fa-pinterest fa-lg white-text"> </i>
            </a>

          </div>

        </div>
      </div>
    )
  }
}

export default Social;
