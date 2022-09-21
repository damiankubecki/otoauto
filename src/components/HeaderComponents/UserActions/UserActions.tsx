import React, { useContext } from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { ThemeContext, UserContext } from 'contexts/contexts';
import { routes } from 'router/routes';
import { IThemeContext, IUserContext } from 'types/types';
import { Wrapper, IconContainer, Button, Username } from './UserActionsElements';

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
          <Button to={`${routes.profile}/${user.id}`}>twój profil</Button>
          {' | '}
          <Button to={routes.logout}>wyloguj się</Button>
        </>
      ) : (
        <>
          <Button to={routes.login}>zaloguj się</Button>
          {' | '}
          <Button to={routes.register}>zarejestruj się</Button>
        </>
      )}
    </Wrapper>
  );
};

export default HeaderLoginRegister;
