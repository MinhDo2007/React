import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actAddProductRequest} from './../../actions/index';

class ProductActionPage extends Component {
  constructor(props){
    super(props)
    this.state = ({
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: ""
    })
  }

  componentDidMount(){
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then(res => {
        var {data} = res;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        })
      })
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var {id, txtName, txtPrice, chkbStatus} = this.state;
    var {history} = this.props;
    var product = {
      name: txtName,
      price: txtPrice,
      state: chkbStatus
    }
    if(id){
      callApi(`products/${id}`, 'PUT', {
        name: txtName,
        price: txtPrice,
        state: chkbStatus
      }).then(res => {
        history.goBack();
      })
    }else{
      this.props.onAddProduct(product);
      history.goBack();
      // callApi('products', 'POST', {
      //   name: txtName,
      //   price: txtPrice,
      //   state: chkbStatus
      // }).then(res => {
      //   history.goBack();
      // })
    }
  }

  render() {
    var {txtName, txtPrice, chkbStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm</label>
            <input type="text" className="form-control" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Giá Sản Phẩm</label>
            <input type="text" className="form-control" placeholder="Input field" name="txtPrice" value={txtPrice} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Trạng Thái</label>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} checked={chkbStatus} />
                Còn Hàng
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-10">Lưu Lại</button>
          <Link to='/product-list' className="btn btn-default">Lưu Lại</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, action) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);
