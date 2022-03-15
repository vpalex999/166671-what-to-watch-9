import { createReducer } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { changingGenreAction, fillFilmsAction } from '../store/action';

type InitialState = {
  genre: string;
  films: FilmData[];
}

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changingGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(fillFilmsAction, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
