import React from 'react';
import useApp from 'hooks/useApp';
import AppTemplate from 'templates/AppTemplate';
import { Wrapper, Header, Main, Footer } from './AppElements';

const App = () => {
  const { currentTheme, currentUser } = useApp();

  return (
    <AppTemplate theme={currentTheme} userInfo={currentUser}>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </AppTemplate>
  );
};

export default App;
