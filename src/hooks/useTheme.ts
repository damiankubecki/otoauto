import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { lightMode, darkMode } from 'theme/theme';
import { ITheme, IThemeContext } from 'types/types';
import { THEME_LOCALSTORAGE } from 'config';

const useTheme = (): IThemeContext => {
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();
  const initalTheme = loadFromLocalStorage('theme') || lightMode;
  const [activeTheme, setTheme] = useState<ITheme>(initalTheme);

  const toggleTheme = () => {
    setTheme(activeTheme.name === 'dark' ? lightMode : darkMode);
  };

  useEffect(() => {
    saveToLocalStorage(THEME_LOCALSTORAGE, activeTheme);
  }, [activeTheme]);

  return {
    activeTheme,
    toggleTheme,
  };
};

export default useTheme;
