import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { mokFilmList } from './moks/films';

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
};

const promoFilm: PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promoFilm}
      films={mokFilmList}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
