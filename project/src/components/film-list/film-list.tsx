import { FilmData } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  films: FilmData[];
}

function FilmList({ films }: FilmListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((data) => (
        <SmallFilmCard
          key={data.id}
          data={data}
        />))}
    </div>
  );
}

export default FilmList;
