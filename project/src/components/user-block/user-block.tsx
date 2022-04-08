import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { setAuthorizationAction } from '../../store/user-process/user-process';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector(({USER}) => USER);
  const dispatch = useDispatch();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

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
          to={isAuthorized ? AppRoute.Root : AppRoute.Login}
          className="user-block__link"
          onClick={(evt) => {
            if (isAuthorized) {
              evt.preventDefault();
              dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
              dispatch(logoutAction());
            }
          }}
        >
          {isAuthorized ? 'Sign out' : 'Sign In'}
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
