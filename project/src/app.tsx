import { Route, Routes } from 'react-router-dom';
import AddReviewPage from './pages/add-review/add-review';
import FilmPage from './pages/film-page/film-page';
import MainPage from './pages/main/main';
import MyListPage from './pages/my-list/my-list';
import PlayPage from './pages/play/play';
import SignInPage from './pages/sign-in/sign-in';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found/not-found';
import { AppRoute } from './const';
import { useAppSelector } from './hooks';
import { mokPlayerData } from './moks/player';
import LoadingScreen from './components/loading-screen/loading-screen';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

function App(): JSX.Element {
  const { films, isDataLoaded } = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage promo={films[0]} />} />
        <Route path={AppRoute.Login} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewPage film={films[0]} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Play}
          element={<PlayPage data={mokPlayerData} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
