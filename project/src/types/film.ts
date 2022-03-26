type Rating = {
  score: string;
  level: string;
  count: string;
}

export type Genre = {
  genre: string;
}

export type FilmData = {
  id: string;
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

export type FilmDataList = FilmData[];

