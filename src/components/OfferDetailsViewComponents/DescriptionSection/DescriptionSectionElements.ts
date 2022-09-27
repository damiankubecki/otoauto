import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.section`
  flex-basis: 70%;
`;

const Header = styled.h4`
  padding: 10px 0;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};

  @media (max-width: ${media.tablet_S}) {
    padding: 5px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  white-space: pre-wrap;
`;

export { Wrapper, Header, Text };
