import React from 'react';
import AppTemplate from 'templates/AppTemplate';
import { Wrapper, Title, Description } from './AppElements';

const App = () => (
  <AppTemplate>
    <Wrapper>
      <Title>Create React App TS</Title>
      <Description>The site is ready to work with TypeScript!</Description>
    </Wrapper>
  </AppTemplate>
);

export default App;
