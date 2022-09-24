import styled from 'styled-components';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export { Wrapper, Header, Main, Footer };
