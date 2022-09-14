import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { routes } from 'router/routes';
import useAPI from 'hooks/useApi';
import useMessage from 'hooks/useMessage';
import { UserContext } from 'contexts/contexts';
import { ICarOffer, IUserContext } from 'types/types';

const useProfileView = () => {
  const location = useParams();
  const navigate = useNavigate();
  const { getOffersByUserId, getUserById } = useAPI();
  const { MessageElement, isMessageActive, showMessage } = useMessage();
  const activeUser = useContext(UserContext) as IUserContext;
  const [isLoading, setLoading] = useState(true);
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

  return { isLoading, isProfileYours, userOffers, username, isMessageActive, MessageElement };
};

export default useProfileView;
