import * as TYPES from './../constants/action-types';

export const actHandleNext = () => {
  return {
    type: TYPES.HANDLE_NEXT
  }
}

export const actNextSlideShow = () => {
  return {
    type: TYPES.NEXT_SLIDE_SHOW,
  }
}

export const actPrevSlideShow = () => {
  return {
    type: TYPES.PREV_SLIDE_SHOW,
  }
}

export const actToggleReadContent = () => {
  return {
    type: TYPES.TOGGLE_READ_CONTENT
  }
}

export const actOpenModal = (index) => {
  return {
    type: TYPES.OPEN_MODAL,
    currentIndex: index
  }
}

export const actChangeImage = (index) => {
  return {
    type: TYPES.CHANGE_IMAGE,
    currentIndex: index
  }
}

export const actPrevImage = () => {
  return {
    type: TYPES.PREV_IMAGE
  }
}

export const actNextImage = () => {
  return {
    type: TYPES.NEXT_IMAGE
  }
}
