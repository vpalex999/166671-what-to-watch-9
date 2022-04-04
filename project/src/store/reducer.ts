import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import {
  changeGenreAction,
  loadFilmsAction,
  loadFilmAction,
  setAuthorizationAction,
  setErrorAction,
  loadSameFilmsAction,
  loadReviewsAction
} from '../store/action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
import { ReviewData } from '../types/review';
type InitialState = {
  filterGenre: string;
  films: FilmData[];
  filmCountPerStep: number;
  isDataLoaded: boolean;
  error: string;
  authorizationStatus: AuthorizationStatus;
  film: FilmData | null;
  sameFilms: FilmData[];
  reviews: ReviewData[];
};

const initialState: InitialState = {
  filterGenre: ALL_GENRES,
  films: [],
  filmCountPerStep: 8,
  isDataLoaded: false,
  error: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
  sameFilms: [],
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.filterGenre = action.payload;
    })
    .addCase(loadFilmsAction, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadFilmAction, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSameFilmsAction, (state, action) => {
      state.sameFilms = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    });
});

export { reducer };
