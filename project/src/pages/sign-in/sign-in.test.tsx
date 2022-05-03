import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import SignInPage from './sign-in';

const mockStore = configureMockStore();

describe('Component: SignInPage', () => {
  const history = createMemoryHistory();

  it('should render "SignInPage" when user navigate to "/login" url', () => {
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <SignInPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Email address'), 'keks');
    expect(screen.getByDisplayValue('keks')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Password'), '123456');
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
  });

  // TODO: make skip test
  it.skip('Проверка неверного логирования', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <SignInPage />
        </HistoryRouter>
      </Provider>,
    );
  });

  // TODO: make skip test
  it.skip('Проверка нажатия кнопки Submit', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <SignInPage />
        </HistoryRouter>
      </Provider>,
    );
  });
});
