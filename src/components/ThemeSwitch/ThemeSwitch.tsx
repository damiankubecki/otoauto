import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/contexts';
import { IThemeContext } from 'types/types';
import { Switch } from './ThemeSwitchElements';

const ThemeSwitch = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext) as IThemeContext;

  return <Switch onClick={toggleTheme} sx={{ m: 1 }} checked={activeTheme.name === 'dark'} />;
};

export default ThemeSwitch;
