import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { routes } from 'router/routes';
import { UserContext } from 'contexts/contexts';
import { IUserContext } from 'types/types';

const useLoginRegisterView = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useContext(UserContext) as IUserContext;

  useEffect(() => {
    if (user.isLogged) navigate(`${routes.home}`);
  }, [pathname]);

  return { pathname };
};

export default useLoginRegisterView;
