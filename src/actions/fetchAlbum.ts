import { Dispatch } from '@test/thunk';

import axiosService from '../utils/axiosService';

import {
  FETCHING_ALBUM,
  FETCHING_ALBUM_SUCCESS,
  FETCHING_ALBUM_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchAlbum = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_ALBUM });

    return axiosService
      .get(API_ENDPOINTS.albums.id(id))
      .then((res) => {
        dispatch({
          type: FETCHING_ALBUM_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ALBUM_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchAlbum;
