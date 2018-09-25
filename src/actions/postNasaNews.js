import { POST_NEWS } from './types.js';

export const sendNasaNews = news => dispatch => {
  dispatch({
    type: POST_NEWS,
    payload: news
  });
}
