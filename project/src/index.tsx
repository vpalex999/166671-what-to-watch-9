import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './store';
import { mokFilmList } from './moks/films';
import { mokPlayerData } from './moks/player';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={mokFilmList[0]}
        films={mokFilmList}
        playerData={mokPlayerData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
