import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { setAuthorizationAction } from '../../store/user-process/user-process';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const dispatch = useDispatch();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (isAuthorized) {

    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div
            className="user-block__avatar"
            onClick={() => {
              navigate(AppRoute.MyList);
            }}
          >
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            to={AppRoute.Root}
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
              dispatch(logoutAction());
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
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlock;
