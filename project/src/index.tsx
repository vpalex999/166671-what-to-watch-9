import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { mokFilmList } from './moks/films';
import { mokPlayerData } from './moks/player';


ReactDOM.render(
  <React.StrictMode>
    <App
      promo={mokFilmList[0]}
      films={mokFilmList}
      playerData={mokPlayerData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
