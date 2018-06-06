import {combineReducers} from 'redux';
import slideShow from './slideShowReducer';
import posts from './topPostsReducer';
import toggleReadContent from './IntroductionReducer';
import galleryImages from './galleryReducer';

const appReducers = combineReducers({
  slideShow,
  posts,
  toggleReadContent,
  galleryImages
})

export default appReducers;
