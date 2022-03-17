import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const';
import { FilmData } from '../types/film';

export const changeGenreAction = createAction(
  Action.CHANGE_GENRE,
  (value: string) => ({ payload: value }),
);

export const fillFilmsAction = createAction(
  Action.FILL_FILMS,
  (value: FilmData[]) => ({ payload: value }),
);
