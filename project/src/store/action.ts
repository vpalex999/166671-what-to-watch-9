import { createAction } from '@reduxjs/toolkit';
import { Action, AuthorizationStatus } from '../const';
import { FilmDataList } from '../types/film';

export const changeGenreAction = createAction(
  Action.CHANGE_GENRE,
  (value: string) => ({ payload: value }),
);

export const loadFilmsAction = createAction<FilmDataList>(Action.LOAD_FILMS);

export const setErrorAction = createAction<string>(Action.CLIENT_ERROR);

export const setAuthorizationAction = createAction<AuthorizationStatus>(Action.AUTHORIZE);
