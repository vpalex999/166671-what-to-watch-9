
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Play = '/player/:id',
}

export const CARD_TAB_NAME = {
  overview: 'Overview',
  details: 'Details',
  reviews: 'Reviews',
};

export const TAB_NAME_LIST = [CARD_TAB_NAME.overview, CARD_TAB_NAME.details, CARD_TAB_NAME.reviews];
