import {combineReducers} from 'redux';
import slideShow from './slideShowReducer';
import posts from './topPostsReducer';

const appReducers = combineReducers({
  slideShow,
  posts
})

export default appReducers;
