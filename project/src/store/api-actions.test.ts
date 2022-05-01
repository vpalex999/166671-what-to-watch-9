import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import {
  checkAuthAction,
  clearErrorAction,
  fetchFilmAction,
  fetchFilmsAction,
  fetchMyListAction,
  fetchPlayFilmAction,
  fetchPromoAction,
  fetchReviewsAction,
  fetchSameFilmsAction,
  loginAction,
  logoutAction,
  sendFilmStatus,
  sendReviewAction
} from './api-actions';
import { setAuthorizationAction } from './user-process/user-process';
import { AuthData } from '../types/auth-data';
import {
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
} from './client-data/client-data';
import { redirectToRoute } from './action';
import { getMockFetchFilm } from '../mocks/film';
import {
  getMockFetchReviews,
  getMockReviewFromClientSend
} from '../mocks/review';
import { setErrorAction } from './client-process/client-process';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is "auth" when server return 200', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Login).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthorizationAction.toString());
  });

  it('should dispatch setAuthorizationAction when login to POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

    mockAPI.onPost(APIRoute.Login).reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthorizationAction.toString());
    expect(actions).toContain(loadUserDataAction.toString());
    expect(actions).toContain(redirectToRoute.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(
      'what-to-watch-token',
      'secret',
    );
  });

  it('should dispatch Logout when logout to Delete /logout', async () => {
    mockAPI.onDelete(APIRoute.Logout).reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthorizationAction.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-watch-token');
  });

  it('should dispatch fetchFilmsAction when GET /films', async () => {
    const mockFetchfilms = [getMockFetchFilm()];

    mockAPI.onGet(APIRoute.Films).reply(200, mockFetchfilms);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilmsAction.toString());
  });

  it('should dispatch fetchPromoAction when GET /promo to store', async () => {
    const mockFetchPromo = getMockFetchFilm();
    const store = mockStore();
    mockAPI.onGet(APIRoute.Promo).reply(200, mockFetchPromo);

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadPromoAction.toString());
  });

  it('should dispatch fetchFilmAction when GET /film/:id', async () => {
    const mockFetchFilm = getMockFetchFilm();
    const filmId = 1234;
    const store = mockStore();
    mockAPI.onGet(`${APIRoute.Films}/${filmId}`).reply(200, mockFetchFilm);

    await store.dispatch(fetchFilmAction(filmId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilmAction.toString());
  });

  it('should dispatch fetchSameFilmsAction when GET / films:id/similar', async () => {
    const mockFetchSameFilms = [getMockFetchFilm()];
    const filmId = 1234;
    const store = mockStore();
    mockAPI
      .onGet(`${APIRoute.Films}/${filmId}/similar`)
      .reply(200, mockFetchSameFilms);

    await store.dispatch(fetchSameFilmsAction(filmId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadSameFilmsAction.toString());
  });

  it('should dispatch fetchReviewsAction when GET / comments:id', async () => {
    const mockFetchReviews = getMockFetchReviews();
    const filmId = 1234;
    const store = mockStore();
    mockAPI
      .onGet(`${APIRoute.Comments}/${filmId}`)
      .reply(200, mockFetchReviews);

    await store.dispatch(fetchReviewsAction(filmId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadReviewsAction.toString());
  });

  it('should dispatch sendReviewAction when POST /comments:id/', async () => {
    const mockFetchReviewToSend = getMockReviewFromClientSend();
    const store = mockStore();
    mockAPI
      .onPost(`${APIRoute.Comments}/${mockFetchReviewToSend.filmId}`)
      .reply(200, []);

    await store.dispatch(sendReviewAction(mockFetchReviewToSend));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setReviewSendingAction.toString());
    expect(actions).toContain(redirectToRoute.toString());
  });

  // TODO: тест выдаёт ошибку, нужно разобраться как тестировать с функцией setTimeout внутри.
  it.skip('should dispatch clearErrorAction to store', () => {
    const store = mockStore();

    store.dispatch(clearErrorAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setErrorAction.toString());
  });

  it('should dispatch fetchPlayFilmAction to GET / films:id', async () => {
    const store = mockStore();
    const filmId = 1234;
    const mockFetchFilm = getMockFetchFilm();

    mockAPI.onGet(`${APIRoute.Films}/${filmId}`).reply(200, mockFetchFilm);

    await store.dispatch(fetchPlayFilmAction(filmId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setIsPlayLoadedAction.toString());
    expect(actions).toContain(loadPlayFilmAction.toString());
  });

  it('should dispatch fetchMyListAction to GET / favorite', async () => {
    const store = mockStore();
    const mockFetchMyList = [getMockFetchFilm()];

    mockAPI.onGet(APIRoute.Favorite).reply(200, mockFetchMyList);

    await store.dispatch(fetchMyListAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadMyListAction.toString());
  });

  it('should send Favorite film status to server PUT / favorite/id/<0,1>', async () => {
    const store = mockStore();
    const filmId = 1234;
    const filmStatus = 1;

    mockAPI
      .onPut(`${APIRoute.Favorite}/${filmId}/${filmStatus}`)
      .reply(200, []);

    await store.dispatch(sendFilmStatus({filmId, status: filmStatus}));
  });
});
