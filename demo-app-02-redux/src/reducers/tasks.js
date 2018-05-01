import * as types from './../constants/ActionTypes';
import _ from 'lodash';

var s4 = () => {
  return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

var findIndex = (id, tasks) =>{
  return _.findIndex(tasks, (task) => {
    return task.id === id;
  })
}

var onGenerateData = () => {
  let data = [{
       id: generateId(),
       name: 'Study English',
       status: true
    },
    {
       id: generateId(),
       name: 'Go to Gym',
       status: false
    },
    {
       id: generateId(),
       name: 'Go to sleep',
       status: true
    }]
  return data
}

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  var index = '';
  switch(action.type){
    case types.LIST_ALL:
      return state;
    case types.SUBMIT_TASK:
      let id = action.task.id;
      let name = action.task.name;
      let status = action.task.status ==='true' ? true : false;
      var task = { id, name, status }
      if(task.id){
        index = findIndex(task.id, state);
        state[index] = task;
      }else{
        task.id = generateId();
        state.push(task);
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      index = findIndex(action.id, state);
      if(index !== -1){
        state[index] = {
          ...state[index],
          status: !state[index].status
        }
        localStorage.setItem('tasks', JSON.stringify(state));
      }
      return [...state];
    case types.DELETE_TASK:
      index = findIndex(action.id, state);
      if(index !== -1){
        state.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(state));
      }
      return [...state]
    case types.GENERATE_DATA:
      var data_generate = onGenerateData();
      state.push.apply(state, data_generate);
      localStorage.setItem('tasks', JSON.stringify(state))
      return [...state]
    default: return state;
  }
}

export default myReducer;