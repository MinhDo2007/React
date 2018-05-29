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
