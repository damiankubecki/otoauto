import styled from 'styled-components';
import Article from 'components/FooterComponents/Article/Article';
import { media } from 'theme/media';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  background-color: ${({ theme }) => theme.secondary};

  @media (max-width: ${media.tablet_S}) {
    flex-direction: column;
    padding: 10px 0 0;
  }
`;

export { Wrapper, Article };
