import { OPEN_NAV, CLOSE_NAV } from './types.js';

export const toggleNavMenuOpen = () => dispatch => {
  dispatch({
    type: OPEN_NAV,
    payload: true
  });
}

export const toggleNavMenuClose = () => dispatch => {
  dispatch({
    type: CLOSE_NAV,
    payload: false
  });
}
