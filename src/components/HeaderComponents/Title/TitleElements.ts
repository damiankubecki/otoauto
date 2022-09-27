import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from 'theme/media';

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

  @media (max-width: ${media.phone_L}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export { Title, StyledLink as Link };
