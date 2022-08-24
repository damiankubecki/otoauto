import { createContext } from 'react';
import { IThemeContext, IUserContext } from 'types/types';

export const ThemeContext = createContext<null | IThemeContext>(null);
export const UserContext = createContext<null | IUserContext>(null);
