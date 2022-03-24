import { ALL_GENRES } from './const';
import { FilmData } from './types/film';

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
