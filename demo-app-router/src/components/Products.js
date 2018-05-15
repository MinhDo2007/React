import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import Product from './Product';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iPhone",
        name: "iPhone",
        price: 123456
      },
      {
        id: 2,
        slug: "SamSung",
        name: "Samsung",
        price: 654321
      }
    ]

    var {match, location} = this.props;
    var url = match.url;

    const result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">{product.id} - {product.name} - {product.price}</li>
        </NavLink>
      )
    })
    return (
      <div>
        <h1>List Products</h1>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:slug" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
