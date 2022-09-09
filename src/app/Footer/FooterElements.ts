import styled from 'styled-components';
import FooterArticle from 'components/FooterArticle/FooterArticle';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  background-color: ${({ theme }) => theme.secondary};
`;

export { Wrapper, FooterArticle as Article };
