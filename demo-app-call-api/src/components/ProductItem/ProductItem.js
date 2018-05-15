import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    var {product, index} = this.props;
    var statusName = product.name ? "Còn Hàng" : "Hết Hàng";
    var statusClass =  product.name ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-default mr-10">Sửa</Link>
          <button type="button" className="btn btn-danger" onClick={() => {this.onDelete(product.id)}}>Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
