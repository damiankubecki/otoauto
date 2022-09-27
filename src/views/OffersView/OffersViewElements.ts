import styled from 'styled-components';
import OfferCard from 'components/OfferCard/OfferCard';
import Button from 'components/Button/Button';
import SearchConditions from 'components/OffersViewComponents/SearchConditions/SearchConditions';
import BackButton from 'components/Button/BackButton';
import { media } from 'theme/media';

const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: center;

  @media (max-width: ${media.tablet_L}) {
    flex-direction: column;
    width: auto;
  }
`;

const SearchConditionsContainer = styled.section`
  flex-grow: 1;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OffersContainer = styled.section`
  flex-basis: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${media.tablet_S}) {
    width: 100%;
  }
`;

const PaginationContainer = styled.div`
  margin: 25px 0;
`;

const ButtonContainer = styled.div``;

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${media.tablet_S}) {
    width: 98%;
  }
`;

export {
  Wrapper,
  SearchConditionsContainer,
  OffersContainer,
  PaginationContainer,
  ButtonContainer,
  BackButtonContainer,
  OfferCard,
  Button,
  BackButton,
  SearchConditions,
};
