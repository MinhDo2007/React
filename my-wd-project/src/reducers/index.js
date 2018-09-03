import {combineReducers} from 'redux';
import slideShow from './slideShowReducer';
import posts from './topPostsReducer';
import toggleReadContent from './IntroductionReducer';
import galleryImages from './galleryReducer';
import relatives from './relativesReducer';
import groomBride from './groomBrideReducer';
import images from './loveStoryReducer';

const appReducers = combineReducers({
  slideShow,
  posts,
  toggleReadContent,
  galleryImages,
  relatives,
  groomBride,
  images,
})

export default appReducers;
