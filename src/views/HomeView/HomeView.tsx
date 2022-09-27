import React, { useContext } from 'react';
import useMediaQueries from 'hooks/useMediaQueries';
import { OffersContext } from 'contexts/contexts';
import { IOffersContext } from 'types/types';
import {
  Wrapper,
  BackgroudOverlay,
  FormSection,
  OffersSection,
  OffersTitle,
  SearchForm,
  SearchFormMobile,
  OfferContainer,
  OfferCard,
} from './HomeViewElements';

const HomeView = () => {
  const { offers } = useContext(OffersContext) as IOffersContext;
  const { isTabletS } = useMediaQueries();

  return (
    <Wrapper>
      <FormSection>
        <BackgroudOverlay />
        {isTabletS ? <SearchFormMobile /> : <SearchForm />}
      </FormSection>
      <OffersTitle>Najnowsze ogłoszenia</OffersTitle>
      <OffersSection>
        {offers
          .slice(-8)
          .reverse()
          .map(offer => (
            <OfferContainer key={offer._id}>
              <OfferCard {...offer} />
            </OfferContainer>
          ))}
      </OffersSection>
    </Wrapper>
  );
};

export default HomeView;
