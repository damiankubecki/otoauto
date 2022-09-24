import React from 'react';
import useLogoutView from 'views/LogoutView/useLogoutView';
import ViewTemplate from 'templates/ViewTemplate';
import { Title } from './LogoutViewElements';

const LogoutView = () => {
  useLogoutView();

  return (
    <ViewTemplate>
      <Title>Wylogowano</Title>
    </ViewTemplate>
  );
};

export default LogoutView;
