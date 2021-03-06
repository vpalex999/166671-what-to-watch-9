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

function App(): JSX.Element {
  const { isDataLoaded } = useAppSelector(({ DATA }) => DATA);
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<SignInPage />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyListPage />
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
  );
}

export default App;
