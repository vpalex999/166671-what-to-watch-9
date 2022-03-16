// Создайте новый компонент «Список жанров». Компонент получает все необходимые данные через props.
// Компонент формирует список фильтров по жанрам.
// Список жанров строится на основании изначального списка фильмов.
// В списке жанров перечислены уникальные жанры,
// то есть не может быть двух вариантов Comedy, например.
// Первым в списке жанров всегда располагается All genres.

import CatalogGenresItemActive from '../catalog-genres-item-active/catalog-genres-item-active';
import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';

function GenresList(): JSX.Element {

  const genres = [
    'All genres',
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers',
  ];

  const filterGenre = 'All genres';

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        genre === filterGenre
          ? <CatalogGenresItemActive key={genre} genre={genre} />
          : <CatalogGenresItem key={genre} genre={genre} />)}
    </ul>
  );
}

export default GenresList;
