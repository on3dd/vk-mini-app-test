import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@vkontakte/vkui/dist/components/Button/Button';

type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  children,
}: LinkButtonProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Button size="xl">{children}</Button>
    </Link>
  );
};

export default LinkButton;
