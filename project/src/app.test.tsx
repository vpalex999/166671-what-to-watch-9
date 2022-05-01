import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from './components/history-route/history-route';
import App from './app';
import { AppRoute, NameSpace } from './const';
import { getMockFilm } from './mocks/film';
import { getMockUser } from './mocks/user';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.user]: {},
  [NameSpace.data]: {
    isDataLoaded: true,
    films: [getMockFilm()],
    promo: getMockFilm(),
    user: getMockUser(),
    myList: [],
    film: null,
  },
  [NameSpace.client]: {},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render Main page when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });

  it('should render "SignInPage" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it.skip('should render "FilmPage" when user navigate to "/films:id"', () => {
    history.push(AppRoute.Film);

    render(fakeApp);

    expect(screen.getByText('wrong text')).toBeInTheDocument();
  });

  it.skip('should render "PlayPage" when user navigate to "/player:id"', () => {
    history.push(AppRoute.Play);

    render(fakeApp);

    expect(screen.getByText('dd')).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
