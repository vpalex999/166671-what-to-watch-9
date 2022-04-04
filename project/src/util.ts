import { ALL_GENRES, LevelRating } from './const';
import { FilmData, FilmDataServer } from './types/film';
import { ReviewData, ReviewDataServer } from './types/review';

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

const getLevelRating = (score: number): string => {
  if (0 <= score && score < 3) {
    return LevelRating.Bad;
  }
  if (score < 5) {
    return LevelRating.Normal;
  }
  if (score < 8) {
    return LevelRating.Good;
  }
  if (score < 10) {
    return LevelRating.VeryGood;
  }
  return LevelRating.Awesome;
};

export const adaptFilmToClient = (film: FilmDataServer): FilmData => {

  const adaptedFilm: FilmData = {
    id: film.id,
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
      score: film.rating,
      level: getLevelRating(film.rating),
      count: film.scoresCount,
    },
    link: film.videoLink,
    trailer: film.previewVideoLink,
  };

  return adaptedFilm;
};

export const adaptCommentToClient = (comment: ReviewDataServer): ReviewData => {
  const adaptedComment: ReviewData = {
    id: comment.id.toString(),
    author: comment.user.name,
    dateTime: comment.date,
    displayDate: comment.date,
    rating: comment.rating.toString(),
    text: comment.comment,
  };

  return adaptedComment;
};
