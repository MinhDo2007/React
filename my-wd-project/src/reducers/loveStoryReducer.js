import * as TYPES from './../constants/action-types';

var initialState = {
  images: [
    "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_1.jpg",
    "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_2.jpg",
    "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_1.jpg",
    "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_2.jpg",
  ],
  indexImage: 0,
}

let handleNext = (index, images) => {
  if(index === images.length - 1){ index = -1; }
  return index + 1;
}

const images = (state = initialState, action) => {
  let {indexImage, images} = state
  switch(action.type){
    case TYPES.HANDLE_NEXT_LOVE_STORY:
      return { ...state, indexImage: handleNext(indexImage, images) };
    default:
      return state;
  }
}

export default images;
