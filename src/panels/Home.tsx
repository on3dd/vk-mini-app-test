import React, { useContext, useMemo } from 'react';

import { UserInfo } from '@vkontakte/vk-bridge';

import { AppContext } from '../utils/contexts/AppContext';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

type HomeProps = {
  id: string;
  fetchedUser: UserInfo | null;
};

const Home: React.FC<HomeProps> = ({
  id,
  fetchedUser,
}: HomeProps) => {
  const { go } = useContext(AppContext);

  const before = useMemo(() => {
    return fetchedUser && fetchedUser.photo_200 ? (
      <Avatar src={fetchedUser.photo_200} />
    ) : null;
  }, [fetchedUser]);

  const description = useMemo(() => {
    return fetchedUser &&
      fetchedUser.city &&
      fetchedUser.city.title
      ? fetchedUser!.city.title
      : '';
  }, [fetchedUser]);

  return (
    <Panel id={id}>
      <PanelHeader>Home</PanelHeader>
      {fetchedUser && (
        <Group title="User Data Fetched with VK Bridge">
          <Cell before={before} description={description}>
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )}

      <Group title="Navigation Example">
        <Div>
          <Button size="xl" onClick={go} data-to="albums">
            Go to albums
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Home;
