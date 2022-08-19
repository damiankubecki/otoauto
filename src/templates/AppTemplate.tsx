import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';

interface IAppTemplate {
  children: JSX.Element;
}

const AppTemplate = ({ children }: IAppTemplate) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppTemplate;
