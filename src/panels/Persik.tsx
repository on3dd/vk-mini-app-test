import React from 'react';
import styled from 'styled-components';
import { platform, IOS } from '@vkontakte/vkui';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';

type PersikProps = {
  id: string;
  go: (props: any) => void;
};

const osName = platform();

const Img = styled.img`
  display: block;
  width: 30%;
  max-width: 240px;
  margin: 20px auto;
`;

const Persik: React.FC<PersikProps> = ({
  id,
  go,
}: PersikProps) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <PanelHeaderButton onClick={go} data-to="home">
          {osName === IOS ? (
            <Icon28ChevronBack />
          ) : (
            <Icon24Back />
          )}
        </PanelHeaderButton>
      }
    >
      Persik
    </PanelHeader>
    <Img
      className="persik"
      src={persik}
      alt="Persik The Cat"
    />
  </Panel>
);

export default Persik;
