import { PropsWithChildren } from 'react';
import { FilmData } from '../../types/film';

type FilmCardDescProps = PropsWithChildren<{
  data: FilmData;
}>

function FilmCardDesc({ data, children }: FilmCardDescProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{data.title}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{data.genre}</span>
        <span className="film-card__year">{data.released}</span>
      </p>
      {children}
    </div>
  );
}

export default FilmCardDesc;
