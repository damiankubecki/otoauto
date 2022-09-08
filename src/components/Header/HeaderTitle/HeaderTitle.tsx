import React from 'react';
import { routes } from 'router/routes';
import { Title, Link } from './HeaderTitleElements';

interface Props {
  children: string;
}

const HeaderTitle = ({ children }: Props) => {
  return (
    <Link to={routes.home}>
      <Title>{children}</Title>
    </Link>
  );
};

export default HeaderTitle;
