import { ReviewSendingStatus } from '../../const';
import { getMockFilm } from '../../mocks/film';
import { getMockReviews } from '../../mocks/review';
import { getMockUser } from '../../mocks/user';
import { FilmData } from '../../types/film';
import {
  clearMyListAction,
  clientData,
  loadFilmAction,
  loadFilmsAction,
  loadMyListAction,
  loadPlayFilmAction,
  loadPromoAction,
  loadReviewsAction,
  loadSameFilmsAction,
  loadUserDataAction,
  setIsPlayLoadedAction,
  setReviewSendingAction
} from './client-data';

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

  it('should isDataLoaded to "true" and load films to state', () => {
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

  it('should load film to state', () => {
    const state = getInitialState();
    const film = getMockFilm();

    expect(clientData.reducer(state, loadFilmAction(film))).toEqual({
      films: [],
      promo: null,
      isDataLoaded: false,
      film: film,
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

  it('should load same films to state', () => {
    const state = getInitialState();
    const sameFilms = [getMockFilm()];

    expect(clientData.reducer(state, loadSameFilmsAction(sameFilms))).toEqual({
      films: [],
      promo: null,
      isDataLoaded: false,
      film: null,
      sameFilms: sameFilms,
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

  it('should load reviews to state', () => {
    const state = getInitialState();
    const reviews = getMockReviews();

    expect(clientData.reducer(state, loadReviewsAction(reviews))).toEqual({
      films: [],
      promo: null,
      isDataLoaded: false,
      film: null,
      sameFilms: [],
      reviews: reviews,
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

  it('should reviewSendingStatus to "true"', () => {
    const state = getInitialState();

    expect(
      clientData.reducer(
        state,
        setReviewSendingAction(ReviewSendingStatus.Sending),
      ),
    ).toEqual({
      films: [],
      promo: null,
      isDataLoaded: false,
      film: null,
      sameFilms: [],
      reviews: [],
      reviewSendingStatus: ReviewSendingStatus.Sending,
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

  it('should load promo to state', () => {
    const state = getInitialState();
    const promo = getMockFilm();

    expect(clientData.reducer(state, loadPromoAction(promo))).toEqual({
      films: [],
      promo: promo,
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
  });

  it('should load user to state', () => {
    const state = getInitialState();
    const user = getMockUser();

    expect(clientData.reducer(state, loadUserDataAction(user))).toEqual({
      films: [],
      promo: null,
      isDataLoaded: false,
      film: null,
      sameFilms: [],
      reviews: [],
      reviewSendingStatus: ReviewSendingStatus.NoSending,
      user: user,
      isPlayLoaded: false,
      playFilm: null,
      myList: [],
    });
  });

  it('should isPlayLoaded to "true" to state', () => {
    const state = getInitialState();

    expect(clientData.reducer(state, setIsPlayLoadedAction(true))).toEqual({
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
      isPlayLoaded: true,
      playFilm: null,
      myList: [],
    });
  });

  it('should load film to play to state', () => {
    const state = getInitialState();
    const film = getMockFilm();

    expect(clientData.reducer(state, loadPlayFilmAction(film))).toEqual({
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
      playFilm: film,
      myList: [],
    });
  });

  it('should load Mylist to state', () => {
    const state = getInitialState();
    const myList = [getMockFilm()];

    expect(clientData.reducer(state, loadMyListAction(myList))).toEqual({
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
      myList: myList,
    });
  });

  it('should clear myList to state', () => {
    const state = getInitialState();

    expect(clientData.reducer(state, clearMyListAction())).toEqual(state);
  });
});
