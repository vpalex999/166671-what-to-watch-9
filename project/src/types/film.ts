type Rating = {
  score: number;
  level: string;
  count: string;
}

export type Film = {
  id: string;
  title: string;
  img: string;
  genre: string;
  released: number;
  runTime: string;
  director: string;
  starring: string[];
  description: string;
  rating: Rating;
  link: string;
}