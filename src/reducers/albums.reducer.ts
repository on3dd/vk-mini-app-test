import {
  FETCHING_ALBUMS,
  FETCHING_ALBUMS_SUCCESS,
  FETCHING_ALBUMS_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, AlbumsState } from '@test';

const initialState: AlbumsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const albumsReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_ALBUMS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ALBUMS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ALBUMS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default albumsReducer;
