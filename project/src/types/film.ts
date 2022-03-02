type Rating = {
  score: number;
  level: string;
  count: string;
}

export type FilmData = {
  id: string;
  title: string;
  backgroung: string;
  poster: string;
  genre: string;
  released: number;
  runTime: string;
  director: string;
  starring: string[];
  description: string;
  rating: Rating;
  link: string;
}
