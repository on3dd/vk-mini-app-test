import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { Album } from '@test';

import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

type ItemProps = {
  data: Album;
};

const Item: React.FC<ItemProps> = ({ data }: ItemProps) => {
  const history = useHistory();

  const go = useCallback(() => {
    return history.push(`/albums/${data.id}`);
  }, [history, data.id]);

  const before = useMemo(() => {
    return <Avatar mode="default" size={28} />;
  }, []);

  return (
    <SimpleCell
      className="albums__item"
      before={before}
      onClick={go}
      data-to="posts"
    >
      {data.title}
    </SimpleCell>
  );
};

export default Item;
