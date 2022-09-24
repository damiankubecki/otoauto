import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { routes } from 'router/routes';
import usePagination from 'hooks/usePagination';
import { MessageContext } from 'contexts/contexts';
import { ICarOffer, IMessageContext, ISearchConditions } from 'types/types';

interface LocationState {
  state: {
    offers: ICarOffer[];
    conditions: ISearchConditions;
  };
}

const useOffersView = () => {
  const { showMessage } = useContext(MessageContext) as IMessageContext;
  const navigate = useNavigate();
  const { state } = useLocation() as LocationState;
  const { currentData, Pagination } = usePagination({
    data: state?.offers,
    itemsPerPage: 8,
  });

  useEffect(() => {
    if (!state.offers.length)
      showMessage({
        textContent: 'Brak ogłoszeń do wyświetlenia',
        buttonContent: 'Powrót do formularza',
        buttonFn: () => navigate(`${routes.home}`),
      });
  }, []);

  return { currentData, state, Pagination };
};

export default useOffersView;
