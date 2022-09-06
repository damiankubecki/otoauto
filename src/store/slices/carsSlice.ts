/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import { ICarData } from 'types/types';
import { API_URL, CARS_DATA_ENDPOINT } from 'config';

const initialState: ICarData[] = [];

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCarsData: (state, action: PayloadAction<ICarData[]>) => {
      if (action.payload.length) return action.payload;
      return [];
    },
  },
});

export const fetchCarsDataAsync = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(`${API_URL}/${CARS_DATA_ENDPOINT}`);
    dispatch(setCarsData(data));
    return Promise.resolve('Pobieranie zakończone');
  } catch (err: any) {
    return Promise.reject('Nie udało się pobrać danych z naszej bazy');
  }
};

export const { setCarsData } = carsSlice.actions;
export default carsSlice.reducer;
