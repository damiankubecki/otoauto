/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import { ICarOffer } from 'types/types';
import { API_URL, ALL_OFFERS_ENDPOINT, OFFER_ENDPOINT } from 'config';
import { IFormValues } from 'components/Forms/OfferForm/OfferForm';
import useAPI from 'hooks/useApi';

const initialState: ICarOffer[] = [];

export const offersSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setOffersCollection: (state, action: PayloadAction<ICarOffer[]>) => {
      if (action.payload.length) return action.payload;
      return [];
    },
    addOffer: (state, action: PayloadAction<ICarOffer>) => {
      return [...state, action.payload];
    },
    updateOffer: (state, action: PayloadAction<ICarOffer>) => {
      const restOfOffers = state.filter(offer => offer._id !== action.payload._id);
      return [...restOfOffers, action.payload];
    },
    deleteOffer: (state, action: PayloadAction<string>) => {
      const otherOffers = state.filter(offer => offer._id !== action.payload);
      return [...otherOffers];
    },
  },
});

export const fetchOffersCollectionAsync = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/${ALL_OFFERS_ENDPOINT}`);
    dispatch(setOffersCollection(data));
    return Promise.resolve('Pobieranie zakończone');
  } catch (err: any) {
    return Promise.reject('Nie udało się pobrać danych z naszej bazy');
  }
};

export const addNewOfferAsync = (formValues: IFormValues) => async (dispatch: Dispatch) => {
  const formData = new FormData();
  Object.keys(formValues).forEach(function (key, index) {
    const values = Object.values(formValues);
    formData.append(key, `${values[index]}`);
  });
  formData.append('image', formValues.image || '');

  try {
    const { data } = await axios.post(`${API_URL}/${OFFER_ENDPOINT}/add`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch(addOffer(data));
    return Promise.resolve({ message: 'Dodano ogłoszenie', data });
  } catch (e) {
    return Promise.reject('Wystąpił błąd podczas dodawania oferty');
  }
};

export const updateOfferAsync =
  (id: string, formValues: IFormValues) => async (dispatch: Dispatch) => {
    const formData = new FormData();
    Object.keys(formValues).forEach(function (key, index) {
      const values = Object.values(formValues);
      formData.append(key, `${values[index]}`);
    });
    formData.append('image', formValues.image || '');

    try {
      const { data } = await axios.put(`${API_URL}/${OFFER_ENDPOINT}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { getOfferById } = useAPI();
      const updatedOffer = await getOfferById(data._id);
      dispatch(updateOffer(updatedOffer));
      return Promise.resolve({ message: 'Zmodyfikowano ogłoszenie', data });
    } catch (e) {
      return Promise.reject('Wystąpił błąd podczas modyfikowania oferty');
    }
  };

export const deleteOfferAsync = (id: string) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`${API_URL}/${OFFER_ENDPOINT}/${id}`);
    dispatch(deleteOffer(id));
    return Promise.resolve('Usunięto ogłoszenie');
  } catch (e) {
    return Promise.reject('Wystąpił błąd podczas usuwania oferty');
  }
};

export const { setOffersCollection, addOffer, updateOffer, deleteOffer } = offersSlice.actions;
export default offersSlice.reducer;
