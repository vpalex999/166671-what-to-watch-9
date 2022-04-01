export const TIMEOUT_SHOW_ERROR = 2000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Play = '/player/:id',
}

export const CardTabName = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
};

export const TAB_NAME_LIST = [
  CardTabName.Overview,
  CardTabName.Details,
  CardTabName.Reviews,
];

export const ALL_GENRES = 'All genres';

export enum LevelRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum Action {
  CHANGE_GENRE = 'main/changeGenre',
  LOAD_FILMS = 'data/loadFilms',
  CLIENT_ERROR = 'client/setError',
  AUTHORIZE = 'client/Authorize',
  REDIRECT_TO_ROUTE = 'redirectToRoute',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
