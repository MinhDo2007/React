var initialState = false;

var myReducer = (state = initialState, action) => {
  if(action.type === 'Toggle status'){
    state = !state;
  }
  return state
}

export default myReducer;