import * as types from './../constants/ActionTypes'
export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
}

export const onSubmitTask = (task) => {
  return {
    type: types.SUBMIT_TASK,
    task: task
  }
}

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}

export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
}

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  }
}

export const onDelete = (id) => {
  return {
    type: types.DELETE_TASK,
    id
  }
}

export const onUpdate = (task) => {
  return {
    type: types.UPDATE_TASK,
    task
  }
}

export const filter = (filter) => {
  return {
    type: types.FILTER_TASK,
    filter
  }
}

export const search = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword
  }
}

export const sort = (sort) => {
  return {
    type: types.SORT_TASK,
    sort
  }
}

export const generateData = () => {
  return {
    type: types.GENERATE_DATA
  }
}