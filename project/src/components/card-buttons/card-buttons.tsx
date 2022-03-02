import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type CardButtonsProps = {
  children?: JSX.Element;
};

function CardButtons(props?: CardButtonsProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="film-card__buttons">
      <button
        onClick={() => {
          navigate(AppRoute.Play);
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
          navigate(AppRoute.MyList);
        }}
        className="btn btn--list film-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {props ? props.children : ''}
    </div>
  );
}

export default CardButtons;
