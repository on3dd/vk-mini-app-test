import { combineReducers } from 'redux';

import albumsReducer from './albums.reducer';
import photosReducer from './photos.reducer';

export default combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
});
