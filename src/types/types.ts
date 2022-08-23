export interface ITheme {
  name: string;
  primary: string;
  secondary: string;
  additional: string;
  blue: string;
  fontColor: string;
  lightFont: number;
  boldFont: number;
  fontSize: {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
}

export interface IThemeContext {
  activeTheme: ITheme;
  toggleTheme: () => void;
}

export interface IUserContext {
  isLogged: boolean;
  username: null | string;
}
