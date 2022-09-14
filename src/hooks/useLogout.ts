import { useEffect } from 'react';
import { logoutUserAsync } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/useRedux';
import useLocalStorage from './useLocalStorage';
import useMessage from 'hooks/useMessage';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { USER_LOCALSTORAGE } from 'config';

const useLogout = () => {
  const navigate = useNavigate();
  const { saveToLocalStorage } = useLocalStorage();
  const { MessageElement, showMessage } = useMessage();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await dispatch(logoutUserAsync());
      saveToLocalStorage(USER_LOCALSTORAGE, {});
      navigate(`${routes.home}`);
    } catch (err) {
      showMessage({
        textContent: `${err}`,
        buttonContent: 'Spróbuj ponownie',
        buttonFn: () => showMessage({ ...defaultMessage }),
      });
    }
  };

  const defaultMessage = {
    textContent: 'Czy na pewno chcesz się wylogować?',
    buttonContent: 'Wyloguj',
    buttonFn: logout,
  };

  useEffect(() => {
    showMessage({ ...defaultMessage });
  }, []);

  return {
    MessageElement,
  };
};

export default useLogout;
