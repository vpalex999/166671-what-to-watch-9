import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { checkAuthAction, loginAction } from './api-actions';
import { setAuthorizationAction } from './user-process/user-process';
import { AuthData } from '../types/auth-data';
import { loadUserDataAction } from './client-data/client-data';
import { redirectToRoute } from './action';


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

  it.skip('should dispatch setAuthorizationAction and redirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setAuthorizationAction.toString());
    expect(actions).toContain(loadUserDataAction.toString());
    expect(actions).toContain(redirectToRoute.toString());
  });
});
