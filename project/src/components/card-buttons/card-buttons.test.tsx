import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CardButtons from './card-buttons';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { AppRoute, NameSpace } from '../../const';
import { getMockFilm } from '../../mocks/film';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const film = getMockFilm();
const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  [NameSpace.data]: {
    myList: [film],
  },
});

describe('Component: CardButtons', () => {
  beforeEach(() => {
    history.push(AppRoute.Root);
  });

  it('should render correctly if film is not in myList', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardButtons filmId={1} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('#add')).toBeInTheDocument();
    expect(screen.queryByTestId('#in-list')).not.toBeInTheDocument();
  });

  it('should render correctly if film into myList', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardButtons filmId={film.id} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.queryByTestId('#add')).not.toBeInTheDocument();
    expect(screen.getByTestId('#in-list')).toBeInTheDocument();
  });

  // TODO: make skip test
  it.skip('the film was not in myList when user click "add button" then icon will changed and the film added to myList', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardButtons filmId={film.id} />
        </HistoryRouter>
      </Provider>,
    );
  });

  // TODO: make skip test
  it.skip('the film was in myList when user click "remove button" then icon will changed and the film deleted from myList', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardButtons filmId={film.id} />
        </HistoryRouter>
      </Provider>,
    );
  });

  it('when user click "Play button" should redirect to PlayPage', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<CardButtons filmId={1} />}
            />
            <Route
              path={AppRoute.Play}
              element={<h1>Mock Play Page</h1>}
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    userEvent.click(screen.getByText('Play'));

    expect(screen.getByText('Mock Play Page')).toBeInTheDocument();
  });
});
