type FilmCardBgProps = {
  background: string;
  alt: string;
}

function FilmCardBg(props: FilmCardBgProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={props.background} alt={props.alt} />
    </div>

  );
}

export default FilmCardBg;
