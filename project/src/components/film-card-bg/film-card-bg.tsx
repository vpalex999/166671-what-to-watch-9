type FilmCardBgProps = {
  backgroung: string;
  alt: string;
}

function FilmCardBg(props: FilmCardBgProps): JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={props.backgroung} alt={props.alt} />
    </div>

  );
}

export default FilmCardBg;
