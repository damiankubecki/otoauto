import styled from 'styled-components';
import MainInfoSection from 'components/OfferDetailsViewComponents/MainInfoSection/MainInfoSection';
import DetailsSection from 'components/OfferDetailsViewComponents/DetailsSection/DetailsSection';
import DescriptionSection from 'components/OfferDetailsViewComponents/DescriptionSection/DescriptionSection';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import BackButton from 'components/Button/BackButton';
import { media } from 'theme/media';

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 975px;

  @media (max-width: ${media.tablet_L}) {
    width: 875px;
  }
  @media (max-width: ${media.tablet_S}) {
    width: 97%;
  }
`;

const ButtonContainer = styled.div`
  display: block;
  padding: 0 10px;
`;

const DataContainer = styled.div`
  display: flex;
  padding: 10px;

  @media (max-width: ${media.tablet_S}) {
    flex-direction: column;
  }
`;

export {
  OfferContainer,
  ButtonContainer,
  DataContainer,
  BackButton,
  MainInfoSection,
  DetailsSection,
  DescriptionSection,
  LoadingSpinner,
};
