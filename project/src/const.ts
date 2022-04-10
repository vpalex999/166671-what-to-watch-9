export const TIMEOUT_SHOW_ERROR = 2000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewSendingStatus {
  Sending = 'SENDING',
  NoSending = 'NO_SENDING',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player',
  Play = '/player/:id',
  NotFound = '/404',
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
  CHANGE_GENRE = 'client/changeGenre',
  LOAD_FILMS = 'data/loadFilms',
  LOAD_FILM = 'data/loadFilm',
  LOAD_SAME_FILMS = 'data/loadSameFilms',
  LOAD_REVIEWS = 'data/loadReviews',
  CLIENT_ERROR = 'client/setError',
  AUTHORIZE = 'user/Authorize',
  REDIRECT_TO_ROUTE = 'redirectToRoute',
  REVIEW_SENDING = 'data/sending_review',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Promo = '/promo',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  client = 'CLIENT',
}
