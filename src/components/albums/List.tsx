import React from 'react';

import { Album } from '@test';

import VKList from '@vkontakte/vkui/dist/components/List/List';

import Item from './Item';

type ListProps = {
  data: Album[];
};

const List: React.FC<ListProps> = ({ data }: ListProps) => {
  return (
    <VKList>
      {data.map((el) => {
        return <Item key={el.id} data={el} />;
      })}
    </VKList>
  );
};

export default List;
