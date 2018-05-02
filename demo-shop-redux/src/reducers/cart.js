import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
  {
    product: {
      id: 1,
      name: 'Iphone',
      price: 100000000,
      description: 'Made In China',
      image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-32gb-den-400x460.png',
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 1,
      name: 'Sony',
      price: 300000000,
      description: 'Made In Japan',
      image: 'https://cdn4.tgdd.vn/Products/Images/42/92069/sony-xperia-xz-premium-hh-400x400.jpg',
      inventory: 10,
      rating: 5
    },
    quantity: 2
  }
]
const cart = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TO_CART:
      return [...state];
    default:
      return [...state];
  }
}

export default cart;