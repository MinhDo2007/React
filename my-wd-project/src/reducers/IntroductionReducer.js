import * as TYPES from './../constants/action-types';

var initialState = false;

const readMore = (state = initialState, action) => {
  switch(action.type){
    case TYPES.TOGGLE_READ_CONTENT:
      return !state;
    default:
      return state;
  }
}

export default readMore;
