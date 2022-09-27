import { useState, useEffect } from 'react';
import { fetchCarsDataAsync } from 'store/slices/carsSlice';
import { fetchOffersCollectionAsync } from 'store/slices/offersSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import useMessage from 'hooks/useMessage';
import { ICarsContext, IOffersContext } from 'types/types';
import { useLocation } from 'react-router';

const useMain = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isMessageActive, messageContent, showMessage, hideMessage } = useMessage();
  const cars = useAppSelector(state => ({ cars: state.cars })) as ICarsContext;
  const offers = useAppSelector(state => ({ offers: state.offers })) as IOffersContext;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCarsDataAsync());
      await dispatch(fetchOffersCollectionAsync());
    };

    fetchData()
      .catch(err =>
        showMessage({
          textContent: `${err}`,
          buttonContent: 'Odśwież stronę',
          buttonFn: () => window.location.reload(),
        })
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    hideMessage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return { isLoading, setLoading, isMessageActive, messageContent, showMessage, cars, offers };
};

export default useMain;
