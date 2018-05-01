var initialState = {
  by: 'name',
  value: 1
}

var myReducer = (state = initialState, action) => {
  if(action.type === 'Sort'){
    var {by, value} = action.sort;
    return {
      sort: { by, value }
    }
    // state.sort = {
    //   by: action.sort.by,
    //   value: action.sort.value
    // }
  }
  return state
}

export default myReducer;