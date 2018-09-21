// import * as TYPES from './../constants/action-types';

var initialState = [
  {
    image: "/images/post1.JPG",
    title: 'Ăn Hỏi - 26/6',
    view: 10
  },
  {
    image: "/images/top2.JPG",
    title: 'Chụp Ảnh Cưới - 8/9',
    view: 20
  },
  {
    image: "/images/top3.JPG",
    title: 'Nhẫn Cưới - 20/9',
    view: 30
  },
  {
    image: "/images/top_posts.jpg",
    title: 'Picture Wedding 4',
    view: 40
  }
]

const posts = (state = initialState, action) => {
  state = initialState.slice(0, 3);
  switch(action.type){
    default:
      return state;
  }
}

export default posts;
