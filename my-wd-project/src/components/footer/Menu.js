import React, { Component } from 'react';

class Menu extends Component {
  render(){
    return (
      <div className="row text-center d-flex justify-content-center pt-5 mb-3">

        <div className="col-md-2 mb-3">
          <h5 className="text-uppercase font-weight-bold">
            <a href="#!">About us</a>
          </h5>
        </div>

        {/* <div className="col-md-2 mb-3">
          <h5 className="text-uppercase font-weight-bold">
            <a href="#!">Products</a>
          </h5>
        </div>

        <div className="col-md-2 mb-3">
          <h5 className="text-uppercase font-weight-bold">
            <a href="#!">Awards</a>
          </h5>
        </div> */}

        <div className="col-md-2 mb-3">
          <h5 className="text-uppercase font-weight-bold">
            <a href="#!">Help</a>
          </h5>
        </div>

        <div className="col-md-2 mb-3">
          <h5 className="text-uppercase font-weight-bold">
            <a href="#!">Contact</a>
          </h5>
        </div>

      </div>
    )
  }
}

export default Menu;
