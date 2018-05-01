import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';
import filter from './filter';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
  tasks, // tasks: tasks
  isDisplayForm,
  itemEditting,
  filter,
  search,
  sort
});

export default myReducer;