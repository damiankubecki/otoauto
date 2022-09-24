import { useAppSelector } from 'hooks/useRedux';
import useTheme from 'hooks/useTheme';
import { IThemeContext, IUserContext } from 'types/types';

const useApp = () => {
  const currentTheme = useTheme() as IThemeContext;
  const currentUser = useAppSelector(state => ({
    isLogged: !!state.user.id,
    id: state.user.id,
    username: state.user.username,
  })) as IUserContext;

  return { currentTheme, currentUser };
};

export default useApp;
