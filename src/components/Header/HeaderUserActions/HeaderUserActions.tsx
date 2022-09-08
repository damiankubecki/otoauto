import React, { useContext } from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { ThemeContext, UserContext } from 'contexts/contexts';
import { routes } from 'router/routes';
import { IThemeContext, IUserContext } from 'types/types';
import { Wrapper, IconContainer, Button, Username } from './HeaderUserActionsElements';

const HeaderLoginRegister = () => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const user = useContext(UserContext) as IUserContext;
  const { Icon } = useFontAwesome();

  return (
    <Wrapper>
      <IconContainer>
        <Icon color={activeTheme.fontColor} size="1x" icon={['fas', 'user']} />
      </IconContainer>
      {user.isLogged ? (
        <>
          <Username>Witaj, {user.username}</Username>
          {' | '}
          <Button to={routes.logout}>Wyloguj się</Button>
        </>
      ) : (
        <>
          <Button to={routes.login}>Zaloguj się</Button>
          {' | '}
          <Button to={routes.register}>Zarejestruj się</Button>
        </>
      )}
    </Wrapper>
  );
};

export default HeaderLoginRegister;
