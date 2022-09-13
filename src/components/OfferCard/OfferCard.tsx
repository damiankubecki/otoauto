import useFontAwesome from 'hooks/useFontAwesome';
import React, { useContext } from 'react';
import { routes } from 'router/routes';
import { ThemeContext } from 'contexts/contexts';
import { Optional, ICarOffer, IThemeContext } from 'types/types';
import { not_found_IMG, not_found_dark_IMG } from 'images/images';
import {
  WrapperDefault,
  WrapperExtended,
  Link,
  Photo,
  Title,
  Data,
  Price,
  Content,
} from './OfferCardElements';

interface Props extends Optional<ICarOffer, 'location' | 'img'> {
  extended?: boolean;
}

const OfferCard = ({
  _id,
  make,
  model,
  yearOfProduction,
  mileage,
  fuelType,
  cost,
  engine,
  location,
  img,
  extended,
}: Props) => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();
  const offerImage = img || activeTheme.name === 'dark' ? not_found_dark_IMG : not_found_IMG;

  return (
    <Link to={`${routes.offer}/${_id}`}>
      {extended ? (
        <WrapperExtended>
          <Photo extended img={offerImage} />
          <Content extended>
            <Title extended>
              {make} {model}
            </Title>
            <Data extended>
              {yearOfProduction} | {mileage.toLocaleString()} km | {fuelType} | {engine} cm3
            </Data>
            <Data extended>
              <Icon color={activeTheme.fontColor} size="1x" icon={['fas', 'location-dot']} />
              {'  '}
              {location || 'Polska'}
            </Data>
          </Content>
          <Price extended>{cost.toLocaleString()} PLN</Price>
        </WrapperExtended>
      ) : (
        <WrapperDefault>
          <Photo img={offerImage} />
          <Content>
            <Title>
              {make} {model} {yearOfProduction}
            </Title>
            <Data></Data>
            <Data>
              {mileage.toLocaleString()} km | {fuelType} | {engine} cm3
            </Data>
            <Price>{cost.toLocaleString()} PLN</Price>
          </Content>
        </WrapperDefault>
      )}
    </Link>
  );
};

export default OfferCard;
