import {combineReducers} from 'redux';
import slideShow from './slideShowReducer';
import posts from './topPostsReducer';
import toggleReadContent from './IntroductionReducer';

const appReducers = combineReducers({
  slideShow,
  posts,
  toggleReadContent
})

export default appReducers;
