import styled from 'styled-components';
import FooterArticle from 'components/FooterComponents/Article/Article';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  background-color: ${({ theme }) => theme.secondary};
`;

export { Wrapper, FooterArticle as Article };
