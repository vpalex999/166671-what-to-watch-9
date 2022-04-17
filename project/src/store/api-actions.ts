import { createAsyncThunk } from '@reduxjs/toolkit';
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
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Films);
      dispatch(loadFilmsAction(data.map((film) => adaptFilmToClient(film))));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmDataServer>(APIRoute.Promo);
      dispatch(loadPromoAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmDataServer>(`${APIRoute.Films}/${filmId}`);
      dispatch(loadFilmAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchSameFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSameFilms',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmDataServerList>(`${APIRoute.Films}/${filmId}/similar`);
      dispatch(loadSameFilmsAction(data
        .map((film) => adaptFilmToClient(film))
        .slice(0, 3)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ReviewDataServer[]>(`${APIRoute.Comments}/${filmId}`);
      dispatch(loadReviewsAction(data.map((comment) => adaptCommentToClient(comment))));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReviewAction = createAsyncThunk<void, ReviewFromClientSend, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendReview',
  async (review, { dispatch, extra: api }) => {
    const data = adaptReviewSendData(review);
    dispatch(setReviewSendingAction(ReviewSendingStatus.Sending));

    try {
      api.post<ReviewToServerSend>(`${APIRoute.Comments}/${review.filmId}`, data);
    } catch (error) {
      dispatch(setReviewSendingAction(ReviewSendingStatus.NoSending));
      errorHandle(error);
    }

    dispatch(setReviewSendingAction(ReviewSendingStatus.NoSending));
    dispatch(redirectToRoute(`${AppRoute.Films}/${review.filmId}`));
  },
);

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'client/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setErrorAction('')), TIMEOUT_SHOW_ERROR);
  });

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'client/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'client/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(setAuthorizationAction(AuthorizationStatus.Auth));
      dispatch(loadUserDataAction(data));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'client/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  });

export const fetchPlayFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(setIsPlayLoadedAction(false));
    try {
      const { data } = await api.get<FilmDataServer>(`${APIRoute.Films}/${filmId}`);
      dispatch(loadPlayFilmAction(adaptFilmToClient(data)));
    } catch (error) {
      errorHandle(error);
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchMyListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchMyList',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FilmDataServerList>(APIRoute.Favorite);
      dispatch(
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

export const sendFilmStatus = createAsyncThunk<void, FavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendFavoriteFilmStatus',
  async ({ filmId, status }, { extra: api }) => {
    try {
      await api.put<FilmDataServer>(`${APIRoute.Favorite}/${filmId}/${status}`);
    } catch (error) {
      errorHandle(error);
    }
  },
);
