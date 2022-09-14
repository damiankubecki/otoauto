import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types/types';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }
  
  ::-webkit-scrollbar {
    width: 19px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary};
    border: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.fontColorAdditional200};
    border: 7px solid ${({ theme }) => theme.primary};
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.fontColorAdditional100};
  }
  `;

export default GlobalStyle;
