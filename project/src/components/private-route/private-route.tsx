import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = PropsWithChildren<{
  children: JSX.Element;
}>

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const { authorizationStatus } = useAppSelector(({USER}) => USER);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={'/login'} />
  );
}


export default PrivateRoute;
