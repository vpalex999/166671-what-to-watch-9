import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmData } from '../../types/film';
import { useEffect, useState } from 'react';
import Player from '../player/player';
import { PlayerData } from '../../types/player';

type FilmCardProps = {
  data: FilmData;
}

function SmallFilmCard({ data }: FilmCardProps): JSX.Element {
  const { id, title, background: img, poster, trailer } = data;
  const [focus, setFocus] = useState(false);
  const [play, setPlay] = useState(false);
  const playerData: PlayerData = {
    id,
    poster,
    playerTime: '1:30:29',
    title,
    trailer,
  };

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
        setPlay(true);
      }, 1000);
    }

    if (!focus && play) {
      setPlay(false);
    }

    return (() => {
      clearInterval(timerId);
    });

  }, [focus, play]);

  const getItem = () => {
    if (play) {
      return (<Player data={playerData} />);
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
