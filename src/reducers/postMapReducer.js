import { POST_MAP } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const newState = {...state};
  
  switch(action.type) {

    case POST_MAP:
      newState.mapInfo = action.payload;
      return newState;

    default:
      return state;
  }
}
