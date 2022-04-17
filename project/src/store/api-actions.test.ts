import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { checkAuthAction, fetchFilmsAction, loginAction, logoutAction } from './api-actions';
import { setAuthorizationAction } from './user-process/user-process';
import { AuthData } from '../types/auth-data';
import { loadFilmsAction, loadUserDataAction } from './client-data/client-data';
import { redirectToRoute } from './action';
import { getMockFetchFilm, getMockFilm } from '../mocks/film';


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

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthorizationAction.toString());

  });

  it('should dispatch setAuthorizationAction when login to POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthorizationAction.toString());
    expect(actions).toContain(loadUserDataAction.toString());
    expect(actions).toContain(redirectToRoute.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-watch-token', 'secret');
  });

  it('should dispatch Logout when logout to Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

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

    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFetchfilms);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilmsAction.toString());

  });
});
