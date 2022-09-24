import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAPI from 'hooks/useApi';
import { LoadingContext, MessageContext } from 'contexts/contexts';
import { ICarOffer, ILoadingContext, IMessageContext } from 'types/types';

const useOfferDetailsView = () => {
  const { setLoading } = useContext(LoadingContext) as ILoadingContext;
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const location = useParams();
  const { getOfferById } = useAPI();
  const [offer, setOffer] = useState<ICarOffer | undefined>(undefined);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.id)
      getOfferById(location.id)
        .then(res => setOffer(res))
        .catch(err =>
          showMessage({
            textContent: err,
            buttonContent: 'Powrót',
            buttonFn: () => history.back(),
          })
        )
        .finally(() => setLoading(false));
  }, []);

  return { offer };
};

export default useOfferDetailsView;
