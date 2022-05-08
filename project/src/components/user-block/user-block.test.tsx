import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { createAPI } from '../../services/api';
import HistoryRouter from '../history-route/history-route';
import UserBlock from './user-block';
import { State } from '../../types/state';
import { Action } from 'redux';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<StaticRange, typeof api, Action>
>(middlewares);

const history = createMemoryHistory();


describe('Component: UserBlock', () => {
  beforeEach(() => {
    history.push(AppRoute.Root);
  });

  it('should render unauthorized mode when user is not authorized', () => {
    const store = mockStore({
      [NameSpace.user]: { authorizationStatus: AuthorizationStatus.Unknown },
      [NameSpace.data]: { user: { avatarUrl: 'avatarUrl' } },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
  });

  it('should render authorized mode when user is authorized', () => {

    const store = mockStore({
      [NameSpace.user]: { authorizationStatus: AuthorizationStatus.Auth },
      [NameSpace.data]: { user: { avatarUrl: 'avatarUrl' } },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
  });

  it('when click to "Sign in button" should redirect to "LoginPage"', () => {
    const store = mockStore({
      [NameSpace.user]: { authorizationStatus: AuthorizationStatus.NoAuth },
      [NameSpace.data]: { user: { avatarUrl: 'avatarUrl' } },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<UserBlock />}
            />
            <Route
              path={AppRoute.Login}
              element={<div>Login Page</div>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByText('Sign in'));

    expect(screen.getByText('Login Page')).toBeInTheDocument();

  });

  it('when click to "Avatar" should redirect to "MyListPage"', async () => {
    const store = mockStore({
      [NameSpace.user]: { authorizationStatus: AuthorizationStatus.Auth },
      [NameSpace.data]: { user: { avatarUrl: 'avatarUrl' } },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<UserBlock />}
            />
            <Route
              path={AppRoute.MyList}
              element={<div>MyList Page</div>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(await screen.findByTestId('avatar'));

    expect(await screen.findByText('MyList Page')).toBeInTheDocument();
  });

});
