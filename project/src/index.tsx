import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
}

const promoFilm: PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promoFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'));
