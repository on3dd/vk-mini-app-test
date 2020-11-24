import React from 'react';

import PanelHeader, {
  PanelHeaderProps,
} from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderButtonBack from './Button';

const PanelHeaderWithButton: React.FC<PanelHeaderProps> = ({
  children,
}: PanelHeaderProps) => {
  return (
    <PanelHeader left={<PanelHeaderButtonBack />}>
      {children}
    </PanelHeader>
  );
};

export default PanelHeaderWithButton;
