import axios from 'axios';
import { ALL_OFFERS_ENDPOINT, API_URL, OFFER_ENDPOINT, USER_ENDPOINT } from 'config';
import { ICarOffer, IUser } from 'types/types';

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

  const getOffersByUserId = async (id: string) => {
    try {
      console.log(`${API_URL}/${ALL_OFFERS_ENDPOINT}/${id}`);
      const response = await axios.get(`${API_URL}/${ALL_OFFERS_ENDPOINT}/${id}`);
      const offers = response.data as ICarOffer[];
      return offers;
    } catch (e) {
      return Promise.reject('Nie udało się pobrać ofert użykownika');
    }
  };

  const getUserById = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/${USER_ENDPOINT}/${id}`);
      const userData = response.data as IUser;
      return userData;
    } catch (e) {
      return Promise.reject('Użytkownik nie istnieje');
    }
  };

  return { getOfferById, getOffersByUserId, getUserById };
};

export default useAPI;
