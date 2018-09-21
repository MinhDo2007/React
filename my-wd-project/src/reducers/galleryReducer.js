import * as TYPES from './../constants/action-types';

var initialState = {
  images: [
    {
      url: "/images/1.jpg",
      title: 'Picture Wedding 1',
      description: 'this is description picture wedding 1'
    },
    {
      url: "/images/2.JPG",
      title: 'Picture Wedding 2',
      description: 'this is description picture wedding 2',
    },
    {
      url: "/images/3.JPG",
      title: 'Picture Wedding 3',
      description: 'this is description picture wedding 3',
    },
    {
      url: "/images/4.JPG",
      title: 'Picture Wedding 4',
      description: 'this is description picture wedding 4',
    },
    {
      url: "/images/5.JPG",
      title: 'Picture Wedding 5',
      description: 'this is description picture wedding 5',
    },
    {
      url: "/images/6.JPG",
      title: 'Picture Wedding 6',
      description: 'this is description picture wedding 6',
    },
    {
      url: "/images/7.JPG",
      title: 'Picture Wedding 7',
      description: 'this is description picture wedding 7',
    },
    {
      url: "/images/8.JPG",
      title: 'Picture Wedding 8',
      description: 'this is description picture wedding 8',
    },
    {
      url: "/images/9.JPG",
      title: 'Picture Wedding 9',
      description: 'this is description picture wedding 9',
    },
    {
      url: "/images/10.JPG",
      title: 'Picture Wedding 10',
      description: 'this is description picture wedding 10',
    },
    {
      url: "/images/11.JPG",
      title: 'Picture Wedding 11',
      description: 'this is description picture wedding 11',
    },
    {
      url: "/images/12.JPG",
      title: 'Picture Wedding 12',
      description: 'this is description picture wedding 12',
    },
    {
      url: "/images/13.JPG",
      title: 'Picture Wedding 13',
      description: 'this is description picture wedding 13',
    },
    {
      url: "/images/14.JPG",
      title: 'Picture Wedding 14',
      description: 'this is description picture wedding 14',
    },
    {
      url: "/images/15.jpg",
      title: 'Picture Wedding 15',
      description: 'this is description picture wedding 15',
    },
    {
      url: "/images/16.jpg",
      title: 'Picture Wedding 16',
      description: 'this is description picture wedding 16',
    },
    {
      url: "/images/17.JPG",
      title: 'Picture Wedding 17',
      description: 'this is description picture wedding 17',
    },
    {
      url: "/images/18.JPG",
      title: 'Picture Wedding 18',
      description: 'this is description picture wedding 18',
    },
    {
      url: "/images/19.JPG",
      title: 'Picture Wedding 19',
      description: 'this is description picture wedding 19',
    },
    {
      url: "/images/20.JPG",
      title: 'Picture Wedding 20',
      description: 'this is description picture wedding 20',
    },
    {
      url: "/images/21.JPG",
      title: 'Picture Wedding 21',
      description: 'this is description picture wedding 21',
    },
    {
      url: "/images/22.JPG",
      title: 'Picture Wedding 22',
      description: 'this is description picture wedding 22',
    },
    {
      url: "/images/23.JPG",
      title: 'Picture Wedding 23',
      description: 'this is description picture wedding 23',
    },
    {
      url: "/images/24.JPG",
      title: 'Picture Wedding 24',
      description: 'this is description picture wedding 24',
    },
    {
      url: "/images/25.JPG",
      title: 'Picture Wedding 25',
      description: 'this is description picture wedding 25',
    },
    {
      url: "/images/26.JPG",
      title: 'Picture Wedding 26',
      description: 'this is description picture wedding 26',
    },
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
