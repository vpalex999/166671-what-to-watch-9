
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

export const CardTabName = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
};

export const TAB_NAME_LIST = [CardTabName.Overview, CardTabName.Details, CardTabName.Reviews];
