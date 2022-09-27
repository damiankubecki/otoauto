import React, { useContext } from 'react';
import { routes } from 'router/routes';
import { ThemeContext } from 'contexts/contexts';
import { ICarOffer, IThemeContext } from 'types/types';
import { not_found_IMG, not_found_dark_IMG } from 'images/images';
import { Wrapper, Photo, MainInfo, Header, Subtitle, Price, Link } from './MainInfoSectionElements';

interface Props {
  offer: ICarOffer | undefined;
}

const MainInfoSection = ({ offer }: Props) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;

  return (
    <Wrapper>
      <Photo
        img={offer?.image || (activeTheme.name === 'dark' ? not_found_dark_IMG : not_found_IMG)}
      />
      <MainInfo>
        <Header>
          {offer?.make} {offer?.model}
        </Header>
        <Subtitle>
          {offer?.yearOfProduction} | {offer?.mileage.toLocaleString()}km | {offer?.bodystyle}
        </Subtitle>
        <Subtitle>
          Sprzedający: <Link to={`${routes.profile}/${offer?.userID}`}>{offer?.username}</Link>
        </Subtitle>
        <Price>{offer?.cost.toLocaleString()} PLN</Price>
      </MainInfo>
    </Wrapper>
  );
};

export default MainInfoSection;
