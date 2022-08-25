import React, { useContext } from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { Button } from './ThemeSwitchElements';

const ThemeSwitch = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext) as IThemeContext;
  const { Icon } = useFontAwesome();

  return (
    <>
      {activeTheme.name === 'dark' ? (
        <Button onClick={toggleTheme} variant="light">
          <Icon color={activeTheme.primary} size="lg" icon={['fas', 'sun']} />
        </Button>
      ) : (
        <Button onClick={toggleTheme} variant="dark">
          <Icon color={activeTheme.primary} size="lg" icon={['fas', 'moon']} />
        </Button>
      )}
    </>
  );
};

export default ThemeSwitch;
