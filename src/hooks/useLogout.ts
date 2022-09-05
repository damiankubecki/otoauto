import { useEffect } from 'react';
import { logoutUserAsync } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/useRedux';
import useMessage from 'hooks/useMessage';
import { useNavigate } from 'react-router';
import { routes } from 'router/routes';

const useLogout = () => {
  const navigate = useNavigate();
  const { MessageElement, showMessage } = useMessage();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await dispatch(logoutUserAsync());
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
