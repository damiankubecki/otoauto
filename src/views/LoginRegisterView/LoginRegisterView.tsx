import React from 'react';
import { routes } from 'router/routes';
import ViewTemplate from 'templates/ViewTemplate';
import useLoginRegisterView from './useLoginRegisterView';
import {
  Title,
  Button,
  ButtonsContainer,
  LoginForm,
  RegisterForm,
} from './LoginRegisterViewElements';

const LoginRegisterView = () => {
  const { pathname } = useLoginRegisterView();

  return (
    <ViewTemplate>
      <Title>Zaloguj się aby kontynuować</Title>
      <ButtonsContainer>
        <Button to={routes.login} className={({ isActive }) => (isActive ? 'active' : '')}>
          Zaloguj się
        </Button>
        <Button to={routes.register} className={({ isActive }) => (isActive ? 'active' : '')}>
          Utwórz konto
        </Button>
      </ButtonsContainer>
      <>
        {pathname === routes.login && <LoginForm />}
        {pathname === routes.register && <RegisterForm />}
      </>
    </ViewTemplate>
  );
};

export default LoginRegisterView;
