import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmData } from '../../types/film';
import { useEffect, useState } from 'react';
import Player from '../player/player';

type FilmCardProps = {
  data: FilmData;
}

function SmallFilmCard({ data }: FilmCardProps): JSX.Element {
  const { title, backgroung: img } = data;
  const [focus, setFocus] = useState(false);
  const [play, setPlay] = useState(false);

  const onHover = () => {
    setFocus(true);
  };

  const onLeave = () => {
    setFocus(false);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (focus && !play) {
      timerId = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log('play: ');
        setPlay(true);
      }, 2000);
    }

    if (!focus && play) {
      // eslint-disable-next-line no-console
      console.log('stop play');
      setPlay(false);
    }

    return (() => {
      clearInterval(timerId);
    });

  }, [focus, play]);

  const getItem = () => {
    if (play) {
      return (<Player src={data.trailer} />);
    }
    return (
      <>
        <div className="small-film-card__image">
          <img src={img} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={AppRoute.Film}>{title}</Link>
        </h3>
      </>
    );
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {getItem()}
    </article >
  );
}

export default SmallFilmCard;
