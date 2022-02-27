import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { mokFilmList } from './moks/films';
import { mokPlayerData } from './moks/player';


type PromoFilm = {
  id: string;
  title: string;
  genre: string;
  year: number;
};

const promoFilm: PromoFilm = {
  id: '1234',
  title: mokFilmList[0].title,
  genre: mokFilmList[0].genre,
  year: mokFilmList[0].released,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promoFilm}
      films={mokFilmList}
      playerData={mokPlayerData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
