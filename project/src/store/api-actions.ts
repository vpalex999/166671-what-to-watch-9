import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '../store';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  ReviewSendingStatus,
  TIMEOUT_SHOW_ERROR
} from '../const';
import { errorHandle } from '../services/error-handle';
import { FilmDataServer, FilmDataServerList } from '../types/film';
import { AuthData } from '../types/auth-data';
import { adaptCommentToClient, adaptFilmToClient, adaptReviewSendData } from '../util';
import { redirectToRoute } from './action';
import {
  loadFilmAction,
  loadPromoAction,
  loadFilmsAction,
  loadSameFilmsAction,
  loadReviewsAction,
  setReviewSendingAction,
  loadUserDataAction,
  setIsPlayLoadedAction,
  loadPlayFilmAction,
  loadMyListAction
} from './client-data/client-data';
import { setAuthorizationAction } from './user-process/user-process';
import { setErrorAction } from './client-process/client-process';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ReviewDataServer, ReviewFromClientSend, ReviewToServerSend } from '../types/review';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Films);
      store.dispatch(
        loadFilmsAction(data.map((film) => adaptFilmToClient(film))),
      );
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try {
      const { data } = await api.get<FilmDataServer>(APIRoute.Promo);
      store.dispatch(loadPromoAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    try {
      const { data } = await api.get<FilmDataServer>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilmAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSameFilmsAction = createAsyncThunk(
  'data/fetchSameFilms',
  async (filmId: number) => {
    try {
      const { data } = await api.get<FilmDataServerList>(`${APIRoute.Films}/${filmId}/similar`);
      store.dispatch(loadSameFilmsAction(data
        .map((film) => adaptFilmToClient(film))
        .slice(0, 3)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (filmId: number) => {
    try {
      const { data } = await api.get<ReviewDataServer[]>(`${APIRoute.Comments}/${filmId}`);
      store.dispatch(loadReviewsAction(data.map((comment) => adaptCommentToClient(comment))));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk(
  'data/sendReview',
  async (review: ReviewFromClientSend) => {
    const data = adaptReviewSendData(review);
    store.dispatch(setReviewSendingAction(ReviewSendingStatus.Sending));

    try {
      api.post<ReviewToServerSend>(`${APIRoute.Comments}/${review.filmId}`, data);
    } catch (error) {
      store.dispatch(setReviewSendingAction(ReviewSendingStatus.NoSending));
      errorHandle(error);
    }

    store.dispatch(setReviewSendingAction(ReviewSendingStatus.NoSending));
    store.dispatch(redirectToRoute(`${AppRoute.Films}/${review.filmId}`));
  },
);

export const clearErrorAction = createAsyncThunk('client/clearError', () => {
  setTimeout(() => store.dispatch(setErrorAction('')), TIMEOUT_SHOW_ERROR);
});

export const checkAuthAction = createAsyncThunk(
  'client/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'client/login',
  async ({ email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(loadUserDataAction(data));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk('client/logout', async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
  } catch (error) {
    errorHandle(error);
  }
});

export const fetchPlayFilmAction = createAsyncThunk(
  'data/fetchFilm',
  async (filmId: number) => {
    store.dispatch(setIsPlayLoadedAction(false));
    try {
      const { data } = await api.get<FilmDataServer>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadPlayFilmAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchMyListAction = createAsyncThunk(
  'data/fetchMyList',
  async () => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Favorite);
      store.dispatch(
        loadMyListAction(data.map((film) => adaptFilmToClient(film))),
      );
    } catch (error) {
      errorHandle(error);
    }
  },
);

type FavoriteStatus = {
  filmId: number;
  status: number;
}

export const sendFilmStatus = createAsyncThunk(
  'data/sendFavoriteFilmStatus',
  async ({ filmId, status }: FavoriteStatus) => {
    try {
      await api.put<FilmDataServer>(`${APIRoute.Favorite}/${filmId}/${status}`);
    } catch (error) {
      errorHandle(error);
    }
  },
);
