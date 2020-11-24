import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import PhotosList from './List';

type PhotoProps = {};

const Photos: React.FC<PhotoProps> = (
  props: PhotoProps,
) => {
  const photos = useSelector(
    (state: RootState) => state.photos,
  );

  return <PhotosList data={photos.data} />;
};

export default Photos;
