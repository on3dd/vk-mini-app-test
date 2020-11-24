import React, { useMemo } from 'react';

import styled from 'styled-components';

import { Photo } from '@test';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';

import LinkButton from '../../base-ui/link-button';

type ItemProps = {
  data: Photo;
};

const StyledDiv = styled(Div)`
  text-align: center;
`;

type ContainerProps = {
  url: string;
};

const Container = styled.div`
  width: 100%;
  padding-top: 100%;
  margin-bottom: 1rem;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${(props: ContainerProps) => {
    return `url(${props.url})`;
  }};
`;

const Item: React.FC<ItemProps> = ({ data }: ItemProps) => {
  const to = useMemo(() => {
    return `/albums/${data.albumId}`;
  }, [data.id]);

  return (
    <Group>
      <StyledDiv>
        <Container url={data.url} />
        <Title level="1" weight="heavy">
          {data.title}
        </Title>
        <LinkButton to={to} mode="tertiary">
          album
        </LinkButton>
      </StyledDiv>
    </Group>
  );
};

export default Item;
