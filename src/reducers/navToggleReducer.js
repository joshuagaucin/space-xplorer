import { OPEN_NAV, CLOSE_NAV } from '../actions/types';

const initialState = {
  toggleNavMenu: false
};

export default function(state = initialState, action) {
  const newState = {...state};
  switch(action.type) {
    case OPEN_NAV:
      newState.toggleNavMenu = action.payload;
      return newState;

    case CLOSE_NAV:
      newState.toggleNavMenu = action.payload;
      return newState;

    default:
      return state;
  }
}
