import {combineReducers} from 'redux';
import slideShow from './slideShowReducer';
import posts from './topPostsReducer';
import toggleReadContent from './IntroductionReducer';
import galleryImages from './galleryReducer';
import relatives from './relativesReducer';
import groomBride from './groomBrideReducer';

const appReducers = combineReducers({
  slideShow,
  posts,
  toggleReadContent,
  galleryImages,
  relatives,
  groomBride
})

export default appReducers;
