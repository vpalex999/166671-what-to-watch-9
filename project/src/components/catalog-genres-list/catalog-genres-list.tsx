import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenreAction } from '../../store/action';
import CatalogGenresItemActive from '../catalog-genres-item-active/catalog-genres-item-active';
import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';
import { getCatalogGenres } from '../../util';

function CatalogGenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const filterGenre = useAppSelector((state) => state.filterGenre);
  const films = useAppSelector((state) => state.films);

  const genresList = getCatalogGenres(films);

  const onChangeGenre = (genre: string) => dispatch(changeGenreAction(genre));

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) =>
        genre === filterGenre ? (
          <CatalogGenresItemActive
            key={genre}
            genre={genre}
            onClick={onChangeGenre}
          />
        ) : (
          <CatalogGenresItem
            key={genre}
            genre={genre}
            onClick={onChangeGenre}
          />
        ),
      )}
    </ul>
  );
}

export default CatalogGenresList;
