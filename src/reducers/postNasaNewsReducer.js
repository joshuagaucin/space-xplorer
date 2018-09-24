import { POST_NEWS } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  const newState = {...state};

  switch(action.type) {

    case POST_NEWS:
      newState.nasaNews = action.payload;
      return newState;
      
    default:
      return state;
  }
}
