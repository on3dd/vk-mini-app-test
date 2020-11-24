import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import AlbumsList from './List';

type AlbumProps = {};

const Albums: React.FC<AlbumProps> = (
  props: AlbumProps,
) => {
  const albums = useSelector(
    (state: RootState) => state.albums,
  );

  return <AlbumsList data={albums.data} />;
};

export default Albums;
