import React, { useContext } from 'react';
import { routes } from 'router/routes';
import useMediaQueries from 'hooks/useMediaQueries';
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
  const { isTabletM } = useMediaQueries();

  return (
    <Wrapper>
      <Section>
        <Title>otoauto</Title>
        <ItemContainer>
          <ThemeSwitch />
        </ItemContainer>
        {isTabletM && (
          <ItemContainer>
            <Button linkTo={user.isLogged ? routes.addOffer : routes.login} icon={['fas', 'plus']}>
              Dodaj ogłoszenie
            </Button>
          </ItemContainer>
        )}
      </Section>
      <Section>
        <UserActions />
        {!isTabletM && (
          <ItemContainer>
            <Button linkTo={user.isLogged ? routes.addOffer : routes.login} icon={['fas', 'plus']}>
              Dodaj ogłoszenie
            </Button>
          </ItemContainer>
        )}
      </Section>
    </Wrapper>
  );
};

export default Header;
