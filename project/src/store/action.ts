import { createAction } from '@reduxjs/toolkit';
import { Action } from '../const';
import { FilmDataList } from '../types/film';

// FIXME: переделать типизацию на <Genre>
export const changeGenreAction = createAction(
  Action.CHANGE_GENRE,
  (value: string) => ({ payload: value }),
);

export const loadFilmsAction = createAction<FilmDataList>(Action.LOAD_FILMS);

export const setErrorAction = createAction<string>(Action.CLIENT_ERROR);
