import React from 'react';
import useOfferDetailsView from 'views/OfferDetailsView/useOfferDetailsView';
import ViewTemplate from 'templates/ViewTemplate';
import {
  OfferContainer,
  ButtonContainer,
  DataContainer,
  BackButton,
  MainInfoSection,
  DetailsSection,
  DescriptionSection,
} from './OfferDetailsViewElements';

const OfferDetailsView = () => {
  const { offer } = useOfferDetailsView();

  return (
    <>
      {offer && (
        <ViewTemplate>
          <OfferContainer>
            <ButtonContainer>
              <BackButton />
            </ButtonContainer>
            <MainInfoSection offer={offer} />
            <DataContainer>
              <DescriptionSection>{offer?.description || ''}</DescriptionSection>
              <DetailsSection offer={offer} />
            </DataContainer>
          </OfferContainer>
        </ViewTemplate>
      )}
    </>
  );
};

export default OfferDetailsView;
