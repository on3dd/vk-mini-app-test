import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import fetchAlbums from '../actions/fetchAlbums';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';

import PanelHeaderWithButton from '../components/base-ui/panel-header-with-button';
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
        <PanelHeaderWithButton to="/">
          Albums
        </PanelHeaderWithButton>
        <AlbumsComponent />
      </Panel>
    </PanelWrapper>
  );
};

export default Albums;
