import { combineReducers } from 'redux';

import albumsReducer from './albums.reducer';
import photosReducer from './photos.reducer';
import photoReducer from './photo.reducer';

export default combineReducers({
  albums: albumsReducer,
  photos: photosReducer,
  photo: photoReducer,
});
