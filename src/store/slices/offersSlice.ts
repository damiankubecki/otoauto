/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import { ICarOffer } from 'types/types';
import { API_URL, ALL_OFFERS_ENDPOINT } from 'config';

const initialState: ICarOffer[] = [];

export const offersSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setOffersCollection: (state, action: PayloadAction<ICarOffer[]>) => {
      if (action.payload.length) return action.payload;
      return [];
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

export const { setOffersCollection } = offersSlice.actions;
export default offersSlice.reducer;
