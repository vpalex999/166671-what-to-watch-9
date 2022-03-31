import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { setAuthorizationAction } from '../../store/action';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const onSig = () => {
    if (isAuthorized) {
      dispatch(setAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  };

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
          onClick={onSig}
        >
          {isAuthorized ? 'Sign out' : 'Sign In'}
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
