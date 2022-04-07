import { AuthorizationStatus, ReviewSendingStatus } from '../const';
import { store } from '../store/index';
import { FilmData } from './film';
import { ReviewData } from './review';

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type ClientData = {
  films: FilmData[];
  isDataLoaded: boolean;
  film: FilmData | null;
  sameFilms: FilmData[];
  reviews: ReviewData[];
  reviewSendingStatus: ReviewSendingStatus;
}

export type ClientProcess = {
  filterGenre: string;
  filmCountPerStep: number;
  error: string;
}
