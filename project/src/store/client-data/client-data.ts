import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ReviewSendingStatus } from '../../const';
import { ClientData } from '../../types/state';

const initialState: ClientData = {
  films: [],
  promo: null,
  isDataLoaded: false,
  film: null,
  sameFilms: [],
  reviews: [],
  reviewSendingStatus: ReviewSendingStatus.NoSending,
  user: {
    avatarUrl: 'img/avatar.jpg',
    email: null,
    id: null,
    name: null,
    token: '',
  },
  isPlayLoaded: false,
  playFilm: null,
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
    loadPromoAction: (state, action) => {
      state.promo = action.payload;
    },
    loadUserDataAction: (state, action) => {
      state.user = action.payload;
    },
    setIsPlayLoadedAction: (state, action) => {
      state.isPlayLoaded = action.payload;
    },
    loadPlayFilmAction: (state, action) => {
      state.playFilm = action.payload;
      state.isPlayLoaded = true;
    },
  },
});

export const {
  loadFilmsAction,
  loadPromoAction,
  loadFilmAction,
  loadSameFilmsAction,
  loadReviewsAction,
  setReviewSendingAction,
  loadUserDataAction,
  setIsPlayLoadedAction,
  loadPlayFilmAction,
} = clientData.actions;
