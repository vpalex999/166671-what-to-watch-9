import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoTitle={PromoFilm.TITLE}
      promoGenre={PromoFilm.GENRE}
      promoYear={PromoFilm.YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
