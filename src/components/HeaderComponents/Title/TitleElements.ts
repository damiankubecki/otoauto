import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.h1`
  padding: 5px 0 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.boldFont};
`;

export { Title, StyledLink as Link };
