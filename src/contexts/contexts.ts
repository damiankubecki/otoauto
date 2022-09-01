import { createContext } from 'react';
import { ICarsContext, IThemeContext, IUserContext } from 'types/types';

export const ThemeContext = createContext<null | IThemeContext>(null);
export const UserContext = createContext<null | IUserContext>(null);
export const CarsContext = createContext<null | ICarsContext>(null);
