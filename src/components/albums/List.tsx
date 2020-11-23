import React from 'react';

import { Album } from '@test';

import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Item from './Item';

type ListProps = {
  data: Album[];
};

const List: React.FC<ListProps> = ({ data }: ListProps) => {
  return (
    <Div>
      {data.map((el) => {
        return <Item key={el.id} data={el} />;
      })}
    </Div>
  );
};

export default List;
