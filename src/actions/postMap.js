import { POST_MAP } from './types.js';

export const PostMap = (activeMap, baseLayer, layersArr, servers) => dispatch => {
  dispatch({
    type: POST_MAP,
    payload: {
      activeMap,
      baseLayer,
      layersArr,
      servers
    }
  });
}
