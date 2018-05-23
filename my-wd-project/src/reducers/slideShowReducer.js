import * as TYPES from './../constants/action-types';

var initialState = {
  images: [
    {
      url: "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_1.jpg",
      title: 'Picture Wedding 1',
      description: 'this is description picture wedding 1'
    },
    {
      url: "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_2.jpg",
      title: 'Picture Wedding 2',
      description: 'this is description picture wedding 2',
    },
    {
      url: "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_1.jpg",
      title: 'Picture Wedding 3',
      description: 'this is description picture wedding 3',
    }
    ,{
      url: "http://themedemo.web-dorado.com/weddingstyle/wp-content/themes/wedding-style/images/slider_2.jpg",
      title: 'Picture Wedding 4',
      description: 'this is description picture wedding 4',
    }
  ],
  indexImage: 0
}

let handlePrev = (index) => {
  let {images} = initialState;
  if(index === 0){ index = images.length; }
  return index - 1;
}

let handleNext = (index) => {
  let {images} = initialState;
  if(index === images.length - 1){ index = -1; }
  return index + 1;
}

const images = (state = initialState, action) => {
  let {indexImage} = state;
  switch(action.type){
    case TYPES.HANDLE_NEXT:
      return { ...state, indexImage: handleNext(indexImage) };
    case TYPES.NEXT_SLIDE_SHOW:
      return { ...state, indexImage: handleNext(indexImage) }
    case TYPES.PREV_SLIDE_SHOW:
      return { ...state, indexImage: handlePrev(indexImage) }
    default:
      return state;
  }
}

export default images;
