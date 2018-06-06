import * as TYPES from './../constants/action-types';

var initialState = {
  images: [
    {
      url: "/images/image1.png",
      title: 'Picture Wedding 1',
      description: 'this is description picture wedding 1'
    },
    {
      url: "/images/image2.png",
      title: 'Picture Wedding 2',
      description: 'this is description picture wedding 2',
    },
    {
      url: "/images/image3.png",
      title: 'Picture Wedding 3',
      description: 'this is description picture wedding 3',
    }
    ,{
      url: "/images/image4.png",
      title: 'Picture Wedding 4',
      description: 'this is description picture wedding 4',
    },
    {
      url: "/images/image4.png",
      title: 'Picture Wedding 5',
      description: 'this is description picture wedding 5'
    },
    {
      url: "/images/image3.png",
      title: 'Picture Wedding 6',
      description: 'this is description picture wedding 6',
    },
    {
      url: "/images/image2.png",
      title: 'Picture Wedding 7',
      description: 'this is description picture wedding 7',
    }
    ,{
      url: "/images/image1.png",
      title: 'Picture Wedding 8',
      description: 'this is description picture wedding 4',
    }
  ],
  currentIndex: 0
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

const galleryImages = (state = initialState, action) => {
  switch(action.type){
    case TYPES.OPEN_MODAL:
      return { ...state, currentIndex: action.currentIndex };
    case TYPES.CHANGE_IMAGE:
      return { ...state, currentIndex: action.currentIndex };
    case TYPES.PREV_IMAGE:
      return { ...state, currentIndex: handlePrev(state.currentIndex) }
    case TYPES.NEXT_IMAGE:
    return { ...state, currentIndex: handleNext(state.currentIndex) }
    default:
      return state;
  }
}

export default galleryImages;
