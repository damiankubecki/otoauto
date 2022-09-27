import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import useFontAwesome from 'hooks/useFontAwesome';
import { useAppDispatch } from 'hooks/useRedux';
import { deleteOfferAsync } from 'store/slices/offersSlice';
import { ThemeContext, UserContext } from 'contexts/contexts';
import { Optional, ICarOffer, IThemeContext, IUserContext } from 'types/types';
import { not_found_IMG, not_found_dark_IMG } from 'images/images';
import {
  WrapperDefault,
  WrapperExtended,
  ButtonsContainer,
  IconButton,
  Photo,
  Content,
  Title,
  Data,
  Price,
} from './OfferCardElements';
import useMediaQueries from 'hooks/useMediaQueries';

interface Props extends Optional<ICarOffer, 'location' | 'image'> {
  extended?: boolean;
  deleteOfferFn?: () => void;
}

const OfferCard = ({
  _id,
  userID,
  make,
  model,
  yearOfProduction,
  mileage,
  fuelType,
  cost,
  engine,
  location,
  image,
  extended,
}: Props) => {
  const user = useContext(UserContext) as IUserContext;
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const offerImage = image || (activeTheme.name === 'dark' ? not_found_dark_IMG : not_found_IMG);
  const { isTabletM, isTabletS } = useMediaQueries();
  const isOfferYours = user.id === userID;

  const handleModifyButtonClick = (e: Event) => {
    e.stopPropagation();
    navigate(`${routes.modifyOffer}/${_id}`);
  };

  const navigateToDetails = () => navigate(`${routes.offer}/${_id}`);

  const handleDeleteButtonClick = (e: Event) => {
    e.stopPropagation();

    const confirmation = window.confirm(`Czy na pewno chcesz usunąć ogłoszenie ${make} ${model}?`);

    if (confirmation) {
      dispatch(deleteOfferAsync(_id));
      window.location.reload();
    }
  };

  return (
    <>
      {extended ? (
        <WrapperExtended onClick={navigateToDetails}>
          {isOfferYours && (
            <ButtonsContainer>
              <IconButton icon={['fas', 'pen-to-square']} onClick={handleModifyButtonClick} />
              <IconButton icon={['fas', 'trash-can']} onClick={handleDeleteButtonClick} />
            </ButtonsContainer>
          )}
          <Photo extended img={offerImage || ''} />
          <Content extended>
            <Title extended>
              {make} {model}
            </Title>
            {isTabletM ? (
              <>
                <Data extended>
                  {yearOfProduction} | {mileage.toLocaleString()} km | {fuelType}
                </Data>
                {!isOfferYours && (
                  <Data extended>
                    <Icon color={activeTheme.fontColor} size="1x" icon={['fas', 'location-dot']} />
                    {'  '}
                    {location || 'Polska'}
                  </Data>
                )}
                <Price extended>{cost.toLocaleString()} PLN</Price>
              </>
            ) : (
              <>
                <Data extended>
                  {yearOfProduction} | {mileage.toLocaleString()} km | {fuelType} | {engine} cm3
                </Data>
                <Data extended>
                  <Icon color={activeTheme.fontColor} size="1x" icon={['fas', 'location-dot']} />
                  {'  '}
                  {location || 'Polska'}
                </Data>
              </>
            )}
          </Content>
          {!isTabletM && <Price extended>{cost.toLocaleString()} PLN</Price>}
        </WrapperExtended>
      ) : (
        <WrapperDefault onClick={navigateToDetails}>
          <Photo img={offerImage || ''} />
          <Content>
            <Title>
              {make} {model} {!isTabletS && yearOfProduction}
            </Title>
            {isTabletS ? (
              <>
                <Data>
                  {yearOfProduction} | {mileage.toLocaleString()} km
                </Data>
                <Data>
                  {fuelType} | {engine} cm3
                </Data>
              </>
            ) : (
              <Data>
                {mileage.toLocaleString()} km | {fuelType} | {engine} cm3
              </Data>
            )}

            <Price>{cost.toLocaleString()} PLN</Price>
          </Content>
        </WrapperDefault>
      )}
    </>
  );
};

export default OfferCard;
