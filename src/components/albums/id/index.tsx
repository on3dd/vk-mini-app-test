import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import AlbumList from './List';

type AlbumProps = {};

const Album: React.FC<AlbumProps> = (props: AlbumProps) => {
  const photos = useSelector(
    (state: RootState) => state.photos,
  );

  return <AlbumList data={photos.data} />;
};

export default Album;
