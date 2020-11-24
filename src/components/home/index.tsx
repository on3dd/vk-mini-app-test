import React, { useMemo } from 'react';

import { User } from '@test';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import LinkButton from '../base-ui/link-button';

type HomeProps = {
  data: User;
};

const Home: React.FC<HomeProps> = ({ data }: HomeProps) => {
  const before = useMemo(() => {
    return data && data.photo_200 ? (
      <Avatar src={data.photo_200} />
    ) : null;
  }, [data]);

  const description = useMemo(() => {
    return data && data.city && data.city.title
      ? data!.city.title
      : '';
  }, [data]);

  return (
    <>
      {data && (
        <Group title="User Data Fetched with VK Bridge">
          <Cell before={before} description={description}>
            {`${data.first_name} ${data.last_name}`}
          </Cell>
        </Group>
      )}

      <Group title="Navigation Example">
        <FixedLayout vertical="bottom">
          <Div>
            <LinkButton to="/albums">
              Go to albums
            </LinkButton>
          </Div>
        </FixedLayout>
      </Group>
    </>
  );
};

export default Home;
