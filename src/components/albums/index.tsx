import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchAlbums from '../../actions/fetchAlbums';

import { RootState } from '@test';

import AlbumsList from './List';

type AlbumProps = {};

const Albums: React.FC<AlbumProps> = (
  props: AlbumProps,
) => {
  const dispatch = useDispatch();

  const albums = useSelector(
    (state: RootState) => state.albums,
  );

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return <AlbumsList data={albums.data} />;
};

export default Albums;
