import React, { useContext } from 'react';
import { routes } from 'router/routes';
import { UserContext } from 'contexts/contexts';
import { IUserContext } from 'types/types';
import {
  Wrapper,
  Section,
  Title,
  UserActions,
  ItemContainer,
  ThemeSwitch,
  Button,
} from './HeaderElements';

const Header = () => {
  const user = useContext(UserContext) as IUserContext;

  return (
    <Wrapper>
      <Section>
        <Title>motogablota</Title>
        <ItemContainer>
          <ThemeSwitch />
        </ItemContainer>
      </Section>
      <Section>
        <UserActions />
        <ItemContainer>
          <Button linkTo={user.isLogged ? routes.addOffer : routes.login} icon={['fas', 'plus']}>
            Dodaj ogłoszenie
          </Button>
        </ItemContainer>
      </Section>
    </Wrapper>
  );
};

export default Header;
