import { OPEN_SEARCH_BAR, CLOSE_SEARCH_BAR } from '../actions/types';

const initialState = {
  toggleSearchBar: false
};

export default function(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {

    case OPEN_SEARCH_BAR:
      newState.toggleSearchBar = action.payload;
      return newState;

    case CLOSE_SEARCH_BAR:
      newState.toggleSearchBar = action.payload;
      return newState;

    default:
      return state;
  }
}
