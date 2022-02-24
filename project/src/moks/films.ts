import { Film } from '../types/film';

const enum Genre {
  Musical = 'Musical',
  Western = 'Western',
  Drama = 'Drama',
  Comedy = 'Comedy',
  Cartoon = 'Cartoon',
  Mystery = 'Mystery',
}

const mokFilmList: Film[] = [
  {
    id: '12345',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: Genre.Mystery,
    released: 2007,
    runTime: '1h 59m',
    director: 'Anthony Mann',
    starring: ['Bill Murray', 'Meryl Streep', 'Marlon Brando', 'Willem Dafoe'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 1',
    rating: {
      score: 8.9,
      level: 'Very good',
      count: '240 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12346',
    title: 'Bohemian Rhapsody',
    img: 'img/bohemian-rhapsody.jpg',
    genre: Genre.Musical,
    released: 2008,
    runTime: '1h 20m',
    director: 'Martin Scorsese',
    starring: ['Robert De Niro', 'Dan Duryea', 'Jude Law', 'Katharine Hepburn'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 2',
    rating: {
      score: 6.9,
      level: 'Very good',
      count: '160 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12347',
    title: 'Macbeth',
    img: 'img/macbeth.jpg',
    genre: Genre.Drama,
    released: 2009,
    runTime: '1h 30m',
    director: 'Steven Spielberg',
    starring: ['Jack Nicholson', 'Daniel Day-Lewis', 'Mary Beth Hughes', 'Clark Gable'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 3',
    rating: {
      score: 4.3,
      level: 'Good',
      count: '240 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12348',
    title: 'Aviator',
    img: 'img/aviator.jpg',
    genre: Genre.Western,
    released: 2010,
    runTime: '1h 40m',
    director: 'George Lucas',
    starring: ['Marlon Brando', 'Sidney Poitier', 'Jack Nicholson', 'Humphrey Bogart'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 4',
    rating: {
      score: 8.0,
      level: 'Very bad',
      count: '220 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12349',
    title: 'We need to talk about Kevin',
    img: 'img/we-need-to-talk-about-kevin.jpg',
    genre: Genre.Drama,
    released: 2021,
    runTime: '1h 45m',
    director: 'James Cameron',
    starring: ['Denzel Washington', 'Clark Gable', 'Sidney Poitier', 'Tom Hanks'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 5',
    rating: {
      score: 10.0,
      level: 'Very good',
      count: '99 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12310',
    title: 'What We Do in the Shadows',
    img: 'img/what-we-do-in-the-shadows.jpg',
    genre: Genre.Mystery,
    released: 2019,
    runTime: '2h 05m',
    director: 'Quentin Tarantino',
    starring: ['Katharine Hepburn', 'Ingrid Bergman', 'Jude Law', 'Willem Dafoe'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 6',
    rating: {
      score: 7.1,
      level: 'Good',
      count: '210 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12311',
    title: 'Revenant',
    img: 'img/revenant.jpg',
    genre: Genre.Comedy,
    released: 2020,
    runTime: '1h 25m',
    director: 'David Fincher',
    starring: ['Humphrey Bogart', 'Tom Hanks', 'Jude Law', 'Erich von Stroheim'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 7',
    rating: {
      score: 4.3,
      level: 'Very good',
      count: '80 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: '12312',
    title: 'Johnny English',
    img: 'img/johnny-english.jpg',
    genre: Genre.Comedy,
    released: 2021,
    runTime: '1h 45m',
    director: 'Woody Allen',
    starring: ['Erich von Stroheim', 'Edward Norton', 'Mary Beth Hughes', 'Willem Dafoe'],
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort 8',
    rating: {
      score: 5.6,
      level: 'Bad',
      count: '100 ratings',
    },
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
];

export { mokFilmList };
