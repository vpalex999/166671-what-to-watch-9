import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ReviewSendingStatus } from '../../const';
import { ClientData } from '../../types/state';

const initialState: ClientData = {
  films: [],
  isDataLoaded: false,
  film: null,
  sameFilms: [],
  reviews: [],
  reviewSendingStatus: ReviewSendingStatus.NoSending,
};

export const clientData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilmsAction: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadFilmAction: (state, action) => {
      state.film = action.payload;
    },
    loadSameFilmsAction: (state, action) => {
      state.sameFilms = action.payload;
    },
    loadReviewsAction: (state, action) => {
      state.reviews = action.payload;
    },
    setReviewSendingAction: (state, action) => {
      state.reviewSendingStatus = action.payload;
    },
  },
});

export const {
  loadFilmsAction,
  loadFilmAction,
  loadSameFilmsAction,
  loadReviewsAction,
  setReviewSendingAction } = clientData.actions;
