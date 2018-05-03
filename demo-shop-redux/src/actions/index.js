import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
  return {
    types: types.ADD_TO_CART,
    product,
    quantity
  }
}