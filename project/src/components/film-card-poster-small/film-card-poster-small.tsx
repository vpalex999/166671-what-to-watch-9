import FilmCardPoster from '../film-card-poster/film-card-poster';

type FilmCardPosterSmallProps = {
  poster: string;
  alt: string;
}

function FilmCardPosterSmall(props: FilmCardPosterSmallProps): JSX.Element {
  return (
    <FilmCardPoster className={'film-card__poster--small'} {...props}/>
  );
}


export default FilmCardPosterSmall;
