import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace } from '../../const';
import { ClientProcess } from '../../types/state';

const initialState: ClientProcess = {
  filterGenre: ALL_GENRES,
  filmCountPerStep: 8,
  error: '',
};

export const clientProcess = createSlice({
  name: NameSpace.client,
  initialState,
  reducers: {
    changeGenreAction: (state, action) => {
      state.filterGenre = action.payload;
    },
    setErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { changeGenreAction, setErrorAction } = clientProcess.actions;
