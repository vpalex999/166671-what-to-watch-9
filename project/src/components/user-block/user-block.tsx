import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { fetchMyListAction, logoutAction } from '../../store/api-actions';
import { clearMyListAction } from '../../store/client-data/client-data';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const {
    user: { avatarUrl },
  } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useDispatch();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuthorized) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div
            className="user-block__avatar"
            onClick={() => {
              dispatch(fetchMyListAction());
              navigate(AppRoute.MyList);
            }}
          >
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            to={AppRoute.Root}
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
              dispatch(clearMyListAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

export default UserBlock;
