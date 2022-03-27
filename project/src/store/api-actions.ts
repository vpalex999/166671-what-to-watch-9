import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { FilmDataServerList } from '../types/film';
import { adaptFilmToClient } from '../util';
import { loadFilmsAction, setErrorAction } from './action';


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
