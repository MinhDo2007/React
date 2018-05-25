// import * as TYPES from './../constants/action-types';

var initialState = [
  {
    image: "/images/top_posts.jpg",
    title: 'Picture Wedding 1',
    description: 'this is description picture wedding 1 this is description picture wedding 1 this is description picture wedding 1 this is description picture wedding 1 this is description picture wedding 1 this is description picture wedding 123456789',
    view: 10
  },
  {
    image: "/images/top_posts.jpg",
    title: 'Picture Wedding 2',
    description: 'this is description picture wedding 1',
    view: 20
  },
  {
    image: "/images/top_posts.jpg",
    title: 'Picture Wedding 3',
    description: 'this is description picture wedding 1',
    view: 30
  },
  {
    image: "/images/top_posts.jpg",
    title: 'Picture Wedding 4',
    description: 'this is description picture wedding 1',
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
