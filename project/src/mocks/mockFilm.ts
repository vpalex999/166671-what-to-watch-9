import {FilmData} from '../types/film';

export const getMockFilm = (): FilmData => ({
  id: 1234,
  title: 'Movie',
  background: 'some bg link',
  poster: 'some poster link',
  genre: 'Comedy',
  released: 2019,
  runTime: 112,
  director: 'Spielberg',
  starring: ['name1', 'name2'],
  description: 'Movie description',
  rating: {score: 10, level: 'Good', count: 123456},
  link: 'movie link',
  trailer: 'movie trailer',
  isFavorite: true,
});
