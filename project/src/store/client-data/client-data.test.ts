import { ReviewSendingStatus } from '../../const';
import { getMockFilm } from '../../mocks/mockFilm';
import { FilmData } from '../../types/film';
import { clientData, loadFilmsAction } from './client-data';

const getInitialState = () => ({
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
  myList: [],
});

describe('Reducer: clientData', () => {
  it('without additional parameters should return initial state', () => {
    expect(clientData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      getInitialState(),
    );
  });

  it('should isDataLoaded to "true" and films has loaded films', () => {
    const state = getInitialState();
    const films: FilmData[] = [getMockFilm()];

    expect(clientData.reducer(state, loadFilmsAction(films))).toEqual({
      films: films,
      promo: null,
      isDataLoaded: true,
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
      myList: [],
    });
  });
});
