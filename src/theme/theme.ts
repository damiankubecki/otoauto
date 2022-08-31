import { ITheme } from 'types/types';

const theme = {
  red: '#c82814',
  lightFont: 300,
  boldFont: 600,
  fontSize: {
    xxxs: '1rem',
    xxs: '1.2rem',
    xs: '1.3rem',
    s: '1.4rem',
    m: '1.5rem',
    l: '1.8rem',
    xl: '2.1rem',
    xxl: '2.8rem',
    xxxl: '3.2rem',
  },
};

const lightMode: ITheme = {
  name: 'light',
  primary: '#ffffff',
  secondary: '#eee',
  additional: '#c8c9c9',
  fontColor: '#24292f',
  fontColorAdditional100: '#4d9fdd',
  fontColorAdditional200: '#2478bd',
  ...theme,
};

const darkMode: ITheme = {
  name: 'dark',
  primary: '#22272e',
  secondary: '#2d333b',
  additional: '#c8c9c9',
  fontColor: '#cdd9e5',
  fontColorAdditional100: '#664b86',
  fontColorAdditional200: '#bb86fc',
  ...theme,
};

export { lightMode, darkMode };
