import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { changeGenreAction, loadFilmsAction, setAuthorizationAction, setErrorAction } from '../store/action';
import { ALL_GENRES, AuthorizationStatus } from '../const';
type InitialState = {
  filterGenre: string;
  films: FilmData[];
  filmCountPerStep: number;
  isDataLoaded: boolean;
  error: string;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  filterGenre: ALL_GENRES,
  films: [],
  filmCountPerStep: 8,
  isDataLoaded: false,
  error: '',
  authorizationStatus: AuthorizationStatus.Unknown,
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
    });
});

export { reducer };
