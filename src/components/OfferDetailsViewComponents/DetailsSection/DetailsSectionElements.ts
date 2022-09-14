import styled from 'styled-components';
import InfoItem from '../InfoItem/InfoItem';

const Wrapper = styled.section`
  flex-basis: 40%;
`;

const Header = styled.h4`
  padding: 10px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
`;

export { Wrapper, Header, InfoItem };
