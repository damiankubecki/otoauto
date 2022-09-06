/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from '@reduxjs/toolkit';
import { API_URL, LOGIN_ENDPOINT, LOGOUT_ENDPOINT, REGISTER_ENDPOINT } from 'config';

interface UserState {
  id: null | string;
  username: string;
}

interface IUserData {
  username: string;
  password: string;
}

const initialState: UserState = {
  id: null,
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { id, username } = action.payload;

      if (id && username) return { id, username };
      return { id: null, username: '' };
    },
    logoutUser: () => {
      return { id: null, username: '' };
    },
  },
});

export const loginUserAsync = (userData: IUserData) => async (dispatch: Dispatch) => {
  try {
    const { username, password } = userData;
    const response = await axios.post(`${API_URL}/${LOGIN_ENDPOINT}`, { username, password });
    dispatch(loginUser({ id: response.data._id, username: response.data.username }));

    return Promise.resolve('Zalogowano');
  } catch (err: any) {
    dispatch(loginUser({ id: null }));
    if (err?.request.status === 0)
      return Promise.reject('Nie udało się nazwiązać połaczenia z bazą');
    if (err?.request.status === 404) return Promise.reject('Błąd połączenia z bazą');
    return Promise.reject('Logowanie nieudane');
  }
};

export const logoutUserAsync = () => async (dispatch: Dispatch) => {
  try {
    await axios.post(`${API_URL}/${LOGOUT_ENDPOINT}`);
    dispatch(logoutUser());
    return Promise.resolve('Wylogowano');
  } catch (err: any) {
    if (err?.request.status === 0)
      return Promise.reject('Nie udało się nazwiązać połaczenia z bazą');
    if (err?.request.status === 404) return Promise.reject('Błąd połączenia z bazą');
  }
};

export const registerUserAsync = async (userData: IUserData) => {
  try {
    const { username, password } = userData;
    await axios.post(`${API_URL}/${REGISTER_ENDPOINT}`, { username, password });
    return Promise.resolve();
  } catch (err: any) {
    if (err?.request.status === 0)
      return Promise.reject('Nie udało się nazwiązać połaczenia z bazą');
    if (err?.request.status === 404) return Promise.reject('Błąd połączenia z bazą');
    return Promise.reject('Użytkownik o podanej nazwie już istnieje');
  }
};

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
