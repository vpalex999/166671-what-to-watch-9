import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../const';
import { FilmDataServerList } from '../types/film';
import { adaptFilmToClient } from '../util';
import { loadFilmsAction } from './action';


export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Films);
      store.dispatch(loadFilmsAction(data.map((film) => adaptFilmToClient(film))));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);
