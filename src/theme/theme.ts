import { ITheme } from 'types/types';

const theme = {
  lightFont: 300,
  boldFont: 600,
  fontSize: {
    xxxs: '0.9rem',
    xxs: '1.1rem',
    xs: '1.3rem',
    s: '1.5rem',
    m: '1.6rem',
    l: '2rem',
    xl: '2.5rem',
    xxl: '3rem',
    xxxl: '4.5rem',
  },
};

const lightMode: ITheme = {
  name: 'light',
  primary: '#ffffff',
  secondary: '#eee',
  additional: '#c8c9c9',
  blue: '#1b3fba',
  fontColor: '#24292f',
  ...theme,
};

const darkMode: ITheme = {
  name: 'dark',
  primary: '#22272e',
  secondary: '#2d333b',
  additional: '#c8c9c9',
  blue: '#4b6cdc',
  fontColor: '#cdd9e5',
  ...theme,
};

export { lightMode, darkMode };
