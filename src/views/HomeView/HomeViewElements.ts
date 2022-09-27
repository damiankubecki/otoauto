import styled from 'styled-components';
import { home_background_IMG } from 'images/images';
import SearchForm from 'components/Forms/SearchForm/SearchForm';
import OfferCard from 'components/OfferCard/OfferCard';
import SearchFormMobile from 'components/Forms/SearchForm/SearchForm-mobile';
import { media } from 'theme/media';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  background-position: bottom;
`;

const FormSection = styled.section`
  position: relative;
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  z-index: 2;
`;

const BackgroudOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${home_background_IMG});
  background-size: cover;
  background-position: bottom;
  opacity: ${({ theme }) => (theme.name === 'dark' ? '0.6' : '.85')};
  z-index: -1;
`;

const OffersTitle = styled.h3`
  margin: 28px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_S}) {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const OffersSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto 80px;
  border-top: 4px solid ${({ theme }) => theme.secondary};

  @media (max-width: ${media.tablet_L}) {
    width: 925px;
  }
  @media (max-width: ${media.tablet_M}) {
    width: 580px;
  }
  @media (max-width: ${media.tablet_S}) {
    width: 95%;
    margin: 0 auto 20px;
  }
`;

const OfferContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  flex-basis: 25%;
`;

export {
  Wrapper,
  BackgroudOverlay,
  FormSection,
  OffersSection,
  OffersTitle,
  SearchForm,
  SearchFormMobile,
  OfferContainer,
  OfferCard,
};
