import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendFilmStatus } from '../../store/api-actions';

type CardButtonsProps = {
  filmId: number;
  children?: JSX.Element;
};

function CardButtons(props: CardButtonsProps): JSX.Element {
  const { filmId, children } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { myList } = useAppSelector(({ DATA }) => DATA);

  const isInMyList = myList.find((film) => film.id === filmId);

  const onClickAddMyList = () => {
    if (isInMyList){
      dispatch(sendFilmStatus({filmId, status: 0}));
    } else {
      dispatch(sendFilmStatus({filmId, status: 1}));
    }
  };

  return (
    <div className="film-card__buttons">
      <button
        onClick={() => {
          navigate(`${AppRoute.Player}/${props.filmId}`);
        }}
        className="btn btn--play film-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        onClick={() => {
          onClickAddMyList();
        }}
        className="btn btn--list film-card__button"
        type="button"
      >
        {!isInMyList && (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
        {isInMyList && (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        )}
        <span>My list</span>
      </button>
      {children || ''}
    </div>
  );
}

export default CardButtons;
