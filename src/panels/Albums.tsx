import React, { useContext, useMemo } from 'react';
import { platform, IOS } from '@vkontakte/vkui';

import { AppContext } from '../utils/contexts/AppContext';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import AlbumsComponent from '../components/albums';

type AlbumsProps = {
  id: string;
};

const osName = platform();

const Icon: React.FC = () => {
  return osName === IOS ? (
    <Icon28ChevronBack />
  ) : (
    <Icon24Back />
  );
};

const Albums: React.FC<AlbumsProps> = ({
  id,
}: AlbumsProps) => {
  const { go } = useContext(AppContext);

  const left = useMemo(() => {
    return (
      <PanelHeaderButton onClick={go} data-to="home">
        <Icon />
      </PanelHeaderButton>
    );
  }, [go]);

  return (
    <Panel id={id}>
      <PanelHeader left={left}>Albums</PanelHeader>
      <AlbumsComponent />
    </Panel>
  );
};

export default Albums;
