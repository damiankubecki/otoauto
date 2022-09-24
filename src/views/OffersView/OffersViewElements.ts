import styled from 'styled-components';
import OfferCard from 'components/OfferCard/OfferCard';
import Button from 'components/Button/Button';
import SearchConditions from 'components/OffersViewComponents/SearchConditions/SearchConditions';
import BackButton from 'components/Button/BackButton';

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
`;

const SearchConditionsContainer = styled.section`
  flex-grow: 1;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OffersContainer = styled.section`
  flex-basis: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationContainer = styled.div`
  margin: 25px 0;
`;

const ButtonContainer = styled.div`
  margin: 0 0 70px;
`;

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;
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
