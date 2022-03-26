import { ALL_GENRES } from './const';
import { FilmData, FilmDataServer } from './types/film';

export const getSameFilms = (genre: string, films: FilmData[]): FilmData[] =>
  genre === ALL_GENRES
    ? films
    : films.filter((film) => genre === film.genre);

export const getCatalogGenres = (filmList: FilmData[]): string[] => {
  const map = new Map();

  filmList.forEach((film) => {
    map.set(film.genre, '');
  });

  return [ALL_GENRES, ...map.keys()];
};

export const adaptFilmToClient = (film: FilmDataServer): FilmData => {

  const adaptedFilm: FilmData = {
    id: film.id.toString(),
    title: film.name,
    background: film.backgroundImage,
    poster: film.posterImage,
    genre: film.genre,
    released: film.released,
    runTime: film.runTime.toString(),
    director: film.director,
    starring: film.starring,
    description: film.description,
    rating: {
      score: film.rating.toString(),
      level: 'undefined',
      count: film.scoresCount.toString(),
    },
    link: film.videoLink,
    trailer: film.previewVideoLink,
  };

  return adaptedFilm;
};
