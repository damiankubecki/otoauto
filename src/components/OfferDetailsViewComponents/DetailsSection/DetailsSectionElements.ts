import styled from 'styled-components';
import InfoItem from '../InfoItem/InfoItem';
import { media } from 'theme/media';

const Wrapper = styled.section`
  flex-basis: 30%;
  padding: 0 20px;

  @media (max-width: ${media.tablet_S}) {
    padding: 0;
  }
`;

const Header = styled.h4`
  padding: 10px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
  text-align: right;

  @media (max-width: ${media.tablet_S}) {
    padding: 10px 0 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: left;
  }
`;

export { Wrapper, Header, InfoItem };
