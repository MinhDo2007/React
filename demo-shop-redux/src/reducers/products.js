var initialState = [
  {
    id: 1,
    name: 'Iphone',
    price: 100000000,
    description: 'Made In China',
    image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-32gb-den-400x460.png',
    inventory: 10,
    rating: 4
  },
  {
    id: 1,
    name: 'Samsung',
    price: 200000000,
    description: 'Made In Korea',
    image: 'https://cdn.tgdd.vn/Products/Images/42/112970/samsung-galaxy-j7-plus-hh-400x400.jpg',
    inventory: 10,
    rating: 3
  },
  {
    id: 1,
    name: 'Sony',
    price: 300000000,
    description: 'Made In Japan',
    image: 'https://cdn4.tgdd.vn/Products/Images/42/92069/sony-xperia-xz-premium-hh-400x400.jpg',
    inventory: 10,
    rating: 5
  }
]

const products = (state = initialState, action) => {
  switch(action.type){
    default:
      return [...state]
  }
}

export default products;