import styled from 'styled-components';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { media } from 'theme/media';

const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: ${media.tablet_S}) {
    min-height: 100vh;
  }
`;

const ElementContainer = styled.div`
  margin-top: 70px;

  @media (max-width: ${media.tablet_M}) {
    margin-top: 50px;
  }
`;

export { Wrapper, ElementContainer, LoadingSpinner };
