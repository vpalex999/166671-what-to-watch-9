import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPlayFilmAction } from '../../store/api-actions';
import { formatRunTime } from '../../util';

function PlayPage(): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const { isPlayLoaded, playFilm } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [play, setPlay] = useState(false);

  const progress = 30;

  useEffect(() => {
    if (id) {
      const filmId = Number(id);
      dispatch(fetchPlayFilmAction(filmId));
    }

  }, [id, dispatch]);

  useEffect(() => {
    if (play) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }

  }, [play]);

  const playerTime = formatRunTime(playFilm?.runTime || 0);

  const onFullScreenMode = () => {
    videoRef.current?.requestFullscreen();
  };

  if (!isPlayLoaded) {
    return (<LoadingScreen />);
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={playFilm?.link}
        className="player__video"
        poster={playFilm?.background}
      >
      </video>

      <button type="button" className="player__exit"
        onClick={() => { navigate(AppRoute.Root); }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{playerTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => { setPlay((prevPlay) => !prevPlay); }}
          >
            {play && (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            )}
            {!play && (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>

              </>
            )}
          </button>
          <div className="player__name">{playFilm?.title}</div>

          <button type="button" className="player__full-screen"
            onClick={() => {onFullScreenMode();}}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
