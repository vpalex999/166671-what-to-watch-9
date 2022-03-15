import FilmCardPoster from '../film-card-poster/film-card-poster';

type FilmCardPosterBigProps = {
  poster: string;
  alt: string;
}

function FilmCardPosterBig(props: FilmCardPosterBigProps): JSX.Element {
  return (
    <FilmCardPoster className={'film-card__poster--big'} {...props} />
  );
}

export default FilmCardPosterBig;
