import styled from 'styled-components';
import InfoItem from '../InfoItem/InfoItem';

const Wrapper = styled.section`
  flex-basis: 30%;
  padding: 0 20px;
`;

const Header = styled.h4`
  padding: 10px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
  text-align: right;
`;

export { Wrapper, Header, InfoItem };
