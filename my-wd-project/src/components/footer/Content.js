import React, { Component, Fragment } from 'react';
import Social from './Social';

class Content extends Component {
  render(){
    return (
      <Fragment>
        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
          <div className="col-md-8 col-12 mt-5">
            <p className="footer-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>
        </div>
        <Social />
      </Fragment>
    )
  }
}

export default Content;
