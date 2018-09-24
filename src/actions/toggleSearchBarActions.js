import { OPEN_SEARCH_BAR, CLOSE_SEARCH_BAR } from './types.js';

export const toggleSearchBarOpen = () => dispatch => {
  dispatch({
    type: OPEN_SEARCH_BAR,
    payload: true
  });
}

export const toggleSearchBarClose = () => dispatch => {
  dispatch({
    type: CLOSE_SEARCH_BAR,
    payload: false
  });
}
