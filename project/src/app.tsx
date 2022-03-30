import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReviewPage from './pages/add-review/add-review';
import FilmPage from './pages/film-page/film-page';
import MainPage from './pages/main/main';
import MyListPage from './pages/my-list/my-list';
import PlayPage from './pages/play/play';
import SignInPage from './pages/sign-in/sign-in';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from './const';
import { useAppSelector } from './hooks';
import { mokPlayerData } from './moks/player';
import LoadingScreen from './components/loading-screen/loading-screen';


function App(): JSX.Element {
  const { films, isDataLoaded } = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              promo={films[0]}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListPage
                films={films}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewPage
              film={films[0]}
            />
          }
        />
        <Route
          path={AppRoute.Play}
          element={
            <PlayPage
              data={mokPlayerData}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
