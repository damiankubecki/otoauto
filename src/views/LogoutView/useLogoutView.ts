import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { useAppDispatch } from 'hooks/useRedux';
import { logoutUserAsync } from 'store/slices/userSlice';
import useLocalStorage from 'hooks/useLocalStorage';
import { MessageContext } from 'contexts/contexts';
import { IMessageContext } from 'types/types';
import { USER_LOCALSTORAGE } from 'config';

const useLogoutView = () => {
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const navigate = useNavigate();
  const { saveToLocalStorage } = useLocalStorage();
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
};

export default useLogoutView;
