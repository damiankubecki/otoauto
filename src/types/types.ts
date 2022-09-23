import { ChangeEvent } from 'react';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type IHandleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

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
  id: null | string;
  username: null | string;
}

export interface ICarsContext {
  cars: ICarData[];
}

export interface IOffersContext {
  offers: ICarOffer[];
}

export interface IMessageContext {
  showMessage: ({ textContent, buttonContent, buttonFn }: IMessage) => void;
  hideMessage?: () => void;
}

export interface ILoadingContext {
  setLoading: (value: boolean) => void;
}

export interface IView {
  name: string;
  path: string;
  element: JSX.Element;
}

export interface IMessage {
  textContent: string;
  buttonContent: string;
  buttonFn?: () => void;
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

export type Location = string;

export type Transmission = 'manualna' | 'automatyczna';

export type FuelType = 'benzyna' | 'benzyna + LPG' | 'diesel' | 'hybryda' | 'elekrtyczny';

export type Cost = number;

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
  | 'brązowy'
  | 'żółty'
  | 'inny';

export type HP = number;

export type Engine = number;

export type Description = string;

export interface ICarOffer {
  _id: string;
  userID: string;
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
  location: Location;
  date: string;
  image: string;
}

export interface ICarData {
  id: number;
  make: Make;
  country: string;
  models: Model[];
}

export interface ISearchConditions {
  bodystyle: Bodystyle;
  make: Make;
  model: Model;
  price_from: string;
  price_to: string;
  yearOfProduction_from: string;
  yearOfProduction_to: string;
  mileage_from: string;
  mileage_to: string;
  fuelType: FuelType;
  transmission: Transmission;
  color: Color;
}

export interface IUser {
  _id: string;
  username: string;
}

export type OfferFormType = 'add' | 'modify';
