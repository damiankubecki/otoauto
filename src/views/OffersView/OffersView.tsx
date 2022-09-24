import React from 'react';
import ViewTemplate from 'templates/ViewTemplate';
import useOffersView from './useOffersView';
import {
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
} from './OffersViewElements';

const OffersView = () => {
  const { currentData, state, Pagination } = useOffersView();

  return (
    <ViewTemplate>
      <Wrapper>
        <SearchConditionsContainer>
          <SearchConditions {...state.conditions} />
        </SearchConditionsContainer>
        <OffersContainer>
          <BackButtonContainer>
            <BackButton />
          </BackButtonContainer>
          {[...currentData].reverse().map(offer => (
            <OfferCard key={offer._id} extended {...offer} />
          ))}
          <PaginationContainer>
            <Pagination />
          </PaginationContainer>
          <ButtonContainer>
            <Button onClick={() => history.back()} bigger red>
              Powrót
            </Button>
          </ButtonContainer>
        </OffersContainer>
      </Wrapper>
    </ViewTemplate>
  );
};

export default OffersView;
