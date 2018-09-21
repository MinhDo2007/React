import * as TYPES from './../constants/action-types';

var initialState = {
  images: [
    "images/4.JPG",
    "images/6.JPG",
    "images/bia.JPG",
    "images/21.JPG",
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
