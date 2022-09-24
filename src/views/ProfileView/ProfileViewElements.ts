import styled from 'styled-components';
import OfferCard from 'components/OfferCard/OfferCard';
import Button from 'components/Button/Button';
import BackButton from 'components/Button/BackButton';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Wrapper = styled.div`
  margin: 50px auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
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
