import { FilmData } from '../../types/film';

type CardTabOverviewProps = {
  data: FilmData;
}

function CardTabOverview({ data }: CardTabOverviewProps): JSX.Element {
  const { rating, director, starring, description } = data;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rating.level}</span>
          <span className="film-rating__count">{rating.count}</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.slice(0, 4).join(' ')} and
            other
          </strong>
        </p>
      </div>
    </>
  );
}

export default CardTabOverview;
