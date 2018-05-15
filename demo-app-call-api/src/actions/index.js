import * as Types from './../constants/actionType';
import callApi from './../utils/apiCaller'

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    callApi('products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data))
    })
  }
}

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    callApi('products/${id}', 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id))
    })
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    callApi('products', 'POST', product).then(res => {
      dispatch(actAddProduct(res.data))
    })
  }
}
