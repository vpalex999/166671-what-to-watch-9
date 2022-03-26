import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { changeGenreAction, loadFilmsAction } from '../store/action';
import { ALL_GENRES } from '../const';
type InitialState = {
  filterGenre: string;
  films: FilmData[];
  filmCountPerStep: number;
  isDataLoaded: boolean;
};

const initialState: InitialState = {
  filterGenre: ALL_GENRES,
  films: [],
  filmCountPerStep: 8,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.filterGenre = action.payload;
    })
    .addCase(loadFilmsAction, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    });
});

export { reducer };
