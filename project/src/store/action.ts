import { createAction } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';

export const changingGenreAction = createAction('CHANGE_GENRE', (value: string) => (
  {
    payload: value,
  }
));

export const fillFilmsAction = createAction('FILL_FILMS', (value: FilmData[]) => (
  {
    payload: value,
  }
));
