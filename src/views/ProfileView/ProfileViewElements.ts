import styled from 'styled-components';
import OfferCard from 'components/OfferCard/OfferCard';
import Button from 'components/Button/Button';
import BackButton from 'components/Button/BackButton';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { media } from 'theme/media';

const Wrapper = styled.div`
  margin: 50px auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${media.tablet_S}) {
    width: 98%;
  }
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 0 20px;
    text-align: center;
  }
`;

export {
  Wrapper,
  BackButtonContainer,
  Header,
  Subtitle,
  OfferCard,
  Button,
  BackButton,
  LoadingSpinner,
};
