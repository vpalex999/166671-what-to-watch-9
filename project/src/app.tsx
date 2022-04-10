import { Route, Routes } from 'react-router-dom';
import AddReviewPage from './pages/add-review-page/add-review-page';
import FilmPage from './pages/film-page/film-page';
import MainPage from './pages/main/main';
import MyListPage from './pages/my-list/my-list';
import PlayPage from './pages/play/play';
import SignInPage from './pages/sign-in/sign-in';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found/not-found';
import { AppRoute } from './const';
import { useAppSelector } from './hooks';
import LoadingScreen from './components/loading-screen/loading-screen';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

function App(): JSX.Element {
  const { films, isDataLoaded } = useAppSelector(({ DATA }) => DATA);
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
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
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Play}
          element={<PlayPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
