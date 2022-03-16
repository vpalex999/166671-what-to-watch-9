import { FilmData } from './types/film';

const ALL_GENRES = 'All genres';

export const getSameFilms = (genre: string, films: FilmData[]): FilmData[] =>
  genre === ALL_GENRES
    ? films
    : films.filter((film) => genre === film.genre);
