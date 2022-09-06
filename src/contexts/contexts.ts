import { createContext } from 'react';
import { ICarsContext, IOffersContext, IThemeContext, IUserContext } from 'types/types';

export const ThemeContext = createContext<null | IThemeContext>(null);
export const UserContext = createContext<null | IUserContext>(null);
export const CarsContext = createContext<null | ICarsContext>(null);
export const OffersContext = createContext<null | IOffersContext>(null);
