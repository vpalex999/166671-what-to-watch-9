import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmData } from '../../types/film';

type FilmCardProps = {
  data: FilmData;
}

function SmallFilmCard({ data }: FilmCardProps): JSX.Element {
  const { title, backgroung: img } = data;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={img} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
