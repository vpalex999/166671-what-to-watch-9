import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { changeGenreAction, loadFilmsAction, setErrorAction } from '../store/action';
import { ALL_GENRES } from '../const';
type InitialState = {
  filterGenre: string;
  films: FilmData[];
  filmCountPerStep: number;
  isDataLoaded: boolean;
  error: string;
};

const initialState: InitialState = {
  filterGenre: ALL_GENRES,
  films: [],
  filmCountPerStep: 8,
  isDataLoaded: false,
  error: '',
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
    });
});

export { reducer };
