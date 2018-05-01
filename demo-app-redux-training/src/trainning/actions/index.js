import * as types from './../constants/actionType';

export const status = () => {
  return {
    type: types.Toggle_Status
  }
}

export const sort = (sort) => {
  return {
    type: types.Sort,
    sort //sort: sort
  }
}