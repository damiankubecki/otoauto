import axios from 'axios';
import { API_URL, OFFER_ENDPOINT } from 'config';
import { ICarOffer } from 'types/types';

const useAPI = () => {
  const getOfferById = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/${OFFER_ENDPOINT}/${id}`);
      const offerData = response.data as ICarOffer;
      return offerData;
    } catch (e) {
      return Promise.reject('Nie udało się pobrać danych o ofercie');
    }
  };

  return { getOfferById };
};

export default useAPI;
