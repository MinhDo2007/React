import React, { Component } from 'react';

class Product extends Component {
  render() {
    var {match} = this.props;
    var slug = match.params.slug;
    return (
      <div>
        <h1>This is Product Detail Page</h1>
        <h2>{slug} Product Detail</h2>
      </div>
    );
  }
}

export default Product;
