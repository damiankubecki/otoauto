import styled from 'styled-components';
import MainInfoSection from 'components/OfferDetailsViewComponents/MainInfoSection/MainInfoSection';
import DetailsSection from 'components/OfferDetailsViewComponents/DetailsSection/DetailsSection';
import DescriptionSection from 'components/OfferDetailsViewComponents/DescriptionSection/DescriptionSection';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import BackButton from 'components/Button/BackButton';

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 975px;
`;

const ButtonContainer = styled.div`
  display: block;
  padding: 0 10px;
`;

const DataContainer = styled.div`
  display: flex;
  padding: 10px;
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
