type FilmCardPosterProps = {
  poster: string;
  alt: string;
  className?: string
}

function FilmCardPoster(props: FilmCardPosterProps): JSX.Element {
  return (
    <div className={`film-card__poster ${props.className || ''}`}>
      <img
        src={props.poster}
        alt={props.alt}
        width="218"
        height="327"
      />
    </div>
  );
}

export default FilmCardPoster;
