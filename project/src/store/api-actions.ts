import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { FilmDataServerList } from '../types/film';
import { AuthData } from '../types/auth-data';
import { adaptFilmToClient } from '../util';
import { loadFilmsAction, setAuthorizationAction, setErrorAction } from './action';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';


export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Films);
      store.dispatch(loadFilmsAction(data.map((film) => adaptFilmToClient(film))));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'client/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'client/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'client/login',
  async ({ email, password }: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);
