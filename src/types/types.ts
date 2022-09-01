export interface ITheme {
  name: string;
  primary: string;
  secondary: string;
  additional: string;
  red: string;
  fontColor: string;
  fontColorAdditional100: string;
  fontColorAdditional200: string;
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

export interface ICarData {
  id: number;
  mark: Mark;
  country: string;
  models: Model[];
}

export interface IThemeContext {
  activeTheme: ITheme;
  toggleTheme: () => void;
}

export interface IUserContext {
  isLogged: boolean;
  username: null | string;
}

export interface ICarsContext {
  cars: ICarData[];
}

export interface IView {
  name: string;
  path: string;
  element: JSX.Element;
}

export interface IMessage {
  textContent: string;
  buttonContent: string;
  buttonFn: () => void;
}

export type Bodytype =
  | 'auta małe'
  | 'auta miejskie'
  | 'coupe'
  | 'kabriolet'
  | 'kombi'
  | 'kompakt'
  | 'minivan'
  | 'sedan'
  | 'SUV';

export type Mark = string;

export type Model = string;

export type YearOfProduction = number;

export type Mileage = number;

export type Transmission = 'manulana' | 'automatyczna';

export type FuelType = 'benzyna' | 'benzyna + LPG' | 'diesel' | 'hybryda' | 'elekrtyczny';

export type Cost = number;

export type Color = string;

export type HP = number;

export type Engine = number;

export type Description = string;
