import { AuthorizationStatus, ReviewSendingStatus } from '../const';
import { store } from '../store/index';
import { FilmData } from './film';
import { ReviewData } from './review';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type ClientData = {
  films: FilmData[];
  promo: FilmData | null;
  isDataLoaded: boolean;
  film: FilmData | null;
  sameFilms: FilmData[];
  reviews: ReviewData[];
  reviewSendingStatus: ReviewSendingStatus;
  user: UserData;
}

export type ClientProcess = {
  filterGenre: string;
  filmCountPerStep: number;
  error: string;
}
