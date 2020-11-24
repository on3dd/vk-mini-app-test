import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchPhotos from '../actions/fetchPhotos';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeaderWithButton from '../components/base-ui/panel-header-with-button';
import PhotosComponent from '../components/photos';

type PhotosProps = {
  id: string;
};

type PhotosParams = {
  id: string;
};

const Photos: React.FC<PhotosProps> = ({
  id,
}: PhotosProps) => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  const params: PhotosParams = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log('params.id', params.id);
      await dispatch(fetchPhotos(+params.id));

      setFetching(false);
    };

    fetchData();
  }, [dispatch, params.id]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeaderWithButton>
          Photos
        </PanelHeaderWithButton>
        <PhotosComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Photos;
