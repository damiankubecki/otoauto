import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { lightMode, darkMode } from 'theme/theme';
import { ITheme, IThemeContext } from 'types/types';

const useTheme = (): IThemeContext => {
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();
  const initalTheme = loadFromLocalStorage('theme') || lightMode;
  const [activeTheme, setTheme] = useState<ITheme>(initalTheme);

  const toggleTheme = () => {
    setTheme(activeTheme.name === 'dark' ? lightMode : darkMode);
  };

  useEffect(() => {
    saveToLocalStorage('theme', activeTheme);
  }, [activeTheme]);

  return {
    activeTheme,
    toggleTheme,
  };
};

export default useTheme;
