import { combineReducers } from 'redux';
import NavToggleReducer from './navToggleReducer';
import SearchBarReducer from './toggleSearchBarReducer';
import PostNasaNews from './postNasaNewsReducer';
import PostMap from './postMapReducer';

export default combineReducers({
  navToggle: NavToggleReducer,
  searchBarToggle: SearchBarReducer,
  postNasaNews: PostNasaNews,
  PostMap: PostMap
});
