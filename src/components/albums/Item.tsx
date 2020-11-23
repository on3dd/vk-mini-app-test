import React, { useContext, useMemo } from 'react';

import { Album } from '@test';

import { AppContext } from '../../utils/contexts/AppContext';

import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

type ItemProps = {
  data: Album;
};

const Item: React.FC<ItemProps> = ({ data }: ItemProps) => {
  const { go } = useContext(AppContext);

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
