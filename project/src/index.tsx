import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import browserHistory from './browser-history';
import ErrorMessage from './components/error-message/error-message';
import HistoryRouter from './components/history-route/history-route';
import { store } from './store';
import { fetchFilmsAction, fetchPromoAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
