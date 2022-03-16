import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { setFilterGenreAction, fillFilmsAction } from '../store/action';

type InitialState = {
  filterGenre: string;
  films: FilmData[];
}

const initialState: InitialState = {
  filterGenre: 'All genres',
  films: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilterGenreAction, (state, action) => {
      state.filterGenre = action.payload;
    })
    .addCase(fillFilmsAction, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
