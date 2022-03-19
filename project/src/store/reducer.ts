import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { changeGenreAction } from '../store/action';
import { ALL_GENRES } from '../const';
import { mokFilmList } from '../moks/films';

type InitialState = {
  filterGenre: string;
  films: FilmData[];
};

const initialState: InitialState = {
  filterGenre: ALL_GENRES,
  films: mokFilmList,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenreAction, (state, action) => {
    state.filterGenre = action.payload;
  });
});

export { reducer };
