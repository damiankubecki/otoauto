import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, UserContext } from 'contexts/contexts';
import GlobalStyle from 'theme/GlobalStyle';
import { IThemeContext, IUserContext } from 'types/types';

interface IAppTemplate {
  theme: IThemeContext;
  userInfo: IUserContext;
  children: JSX.Element;
}

const AppTemplate = ({ theme, userInfo, children }: IAppTemplate) => (
  <ThemeProvider theme={theme.activeTheme}>
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={userInfo}>
        <GlobalStyle />
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  </ThemeProvider>
);

export default AppTemplate;
