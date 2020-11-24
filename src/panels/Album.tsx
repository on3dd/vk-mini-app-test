import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchAlbum from '../actions/fetchAlbum';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeaderWithButton from '../components/base-ui/panel-header-with-button';
import AlbumComponent from '../components/albums/id';

type AlbumProps = {
  id: string;
};

type AlbumParams = {
  id: string;
};

const Album: React.FC<AlbumProps> = ({
  id,
}: AlbumProps) => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  const params: AlbumParams = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAlbum(+params.id));

      setFetching(false);
    };

    fetchData();
  }, [dispatch, params.id]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeaderWithButton to="/albums">
          Album
        </PanelHeaderWithButton>
        <AlbumComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Album;
