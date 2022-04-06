import { createAction } from '@reduxjs/toolkit';
import { Action, AuthorizationStatus, ReviewSendingStatus } from '../const';
import { FilmData, FilmDataList } from '../types/film';
import { ReviewData } from '../types/review';

export const changeGenreAction = createAction(
  Action.CHANGE_GENRE,
  (value: string) => ({ payload: value }),
);

export const loadFilmsAction = createAction<FilmDataList>(Action.LOAD_FILMS);

export const loadFilmAction = createAction<FilmData>(Action.LOAD_FILM);

export const loadSameFilmsAction = createAction<FilmData[]>(Action.LOAD_SAME_FILMS);

export const loadReviewsAction = createAction<ReviewData[]>(Action.LOAD_REVIEWS);

export const setErrorAction = createAction<string>(Action.CLIENT_ERROR);

export const setAuthorizationAction = createAction<AuthorizationStatus>(Action.AUTHORIZE);

export const redirectToRoute = createAction<string>(Action.REDIRECT_TO_ROUTE);

export const setReviewSendingAction = createAction<ReviewSendingStatus>(Action.REVIEW_SENDING);
