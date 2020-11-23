import { Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_ALBUMS,
  FETCHING_ALBUMS_SUCCESS,
  FETCHING_ALBUMS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchAlbums = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCHING_ALBUMS });

    return axiosService
      .get(API_ENDPOINTS.albums)
      .then((res) => {
        dispatch({
          type: FETCHING_ALBUMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ALBUMS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchAlbums;
