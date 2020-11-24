import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import fetchAlbums from '../actions/fetchAlbums';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderButtonBack from '../components/base-ui/panel-header-button-back';

import AlbumsComponent from '../components/albums';

type AlbumsProps = {
  id: string;
};

const Albums: React.FC<AlbumsProps> = ({
  id,
}: AlbumsProps) => {
  const [fetching, setFetching] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAlbums());

      setFetching(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader left={<PanelHeaderButtonBack />}>
          Albums
        </PanelHeader>
        <AlbumsComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Albums;
