type Rating = {
  score: number;
  level: string;
  count: number;
}

export type Genre = {
  genre: string;
}

export type FilmData = {
  id: number;
  title: string;
  background: string;
  poster: string;
  genre: string;
  released: number;
  runTime: string;
  director: string;
  starring: string[];
  description: string;
  rating: Rating;
  link: string;
  trailer: string;
}

export type FilmDataServer = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type FilmDataList = FilmData[];

export type FilmDataServerList = FilmDataServer[];
