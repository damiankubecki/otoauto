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

export interface IOffersContext {
  offers: ICarOffer[];
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

export type Bodystyle =
  | 'auta małe'
  | 'auta miejskie'
  | 'coupe'
  | 'kabriolet'
  | 'kombi'
  | 'kompakt'
  | 'minivan'
  | 'sedan'
  | 'SUV';

export type Make = string;

export type Model = string;

export type YearOfProduction = number;

export type Mileage = number;

export type Transmission = 'manulana' | 'automatyczna';

export type FuelType = 'benzyna' | 'benzyna + LPG' | 'diesel' | 'hybryda' | 'elekrtyczny';

export type Cost = string;

export type Color =
  | 'czarny'
  | 'biały'
  | 'srebrny'
  | 'różowy'
  | 'grafitowy'
  | 'niebieski'
  | 'zielony'
  | 'złoty'
  | 'czerwony'
  | 'bordowy'
  | 'metaliczny'
  | 'brązowy'
  | 'żółty';

export type HP = number;

export type Engine = number;

export type Description = string;

export interface ICarOffer {
  username: string;
  make: Make;
  model: Model;
  yearOfProduction: YearOfProduction;
  mileage: Mileage;
  transmission: Transmission;
  fuelType: FuelType;
  cost: Cost;
  bodystyle: Bodystyle;
  color: Color;
  hp: HP;
  engine: Engine;
  description: Description;
}

export interface ICarData {
  id: number;
  make: Make;
  country: string;
  models: Model[];
}
