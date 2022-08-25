import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { Wrapper, Text, Spinner } from './LoadingSpinnerElements';

const LoadingSpinner = () => {
  const { activeTheme } = useContext(ThemeContext) as IThemeContext;

  return (
    <Wrapper>
      <Spinner animation="border" variant={activeTheme.name === 'dark' ? 'light' : 'dark'} />
      <Text>Trwa ładowanie...</Text>
    </Wrapper>
  );
};

export default LoadingSpinner;
