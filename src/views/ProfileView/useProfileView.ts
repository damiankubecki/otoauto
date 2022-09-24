import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { routes } from 'router/routes';
import useAPI from 'hooks/useApi';
import { LoadingContext, MessageContext, UserContext } from 'contexts/contexts';
import { ICarOffer, ILoadingContext, IMessageContext, IUserContext } from 'types/types';

const useProfileView = () => {
  const activeUser = useContext(UserContext) as IUserContext;
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const location = useParams();
  const navigate = useNavigate();
  const { getOffersByUserId, getUserById } = useAPI();
  const [isProfileYours, setIsProfileYours] = useState(false);
  const [userOffers, setUserOffers] = useState<ICarOffer[] | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    getOffersByUserId(location.id || '').then(res => setUserOffers(res));
    getUserById(location.id || '')
      .then(res => setUsername(res.username))
      .catch(err =>
        showMessage({
          textContent: err,
          buttonContent: 'Przejdź do strony głównej',
          buttonFn: () => navigate(`${routes.home}`),
        })
      )
      .finally(() => setLoading(false));

    if (location.id === activeUser.id && activeUser.username) {
      setIsProfileYours(true);
      setUsername(activeUser.username);
    }
  }, []);

  return { isProfileYours, userOffers, username };
};

export default useProfileView;
