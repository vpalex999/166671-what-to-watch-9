import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReviewPage from './pages/add-review/add-review';
import FilmPage from './pages/film/film';
import MainPage from './pages/main/main';
import MyListPage from './pages/my-list/my-list';
import PlayPage from './pages/play/play';
import SignInPage from './pages/sign-in/sign-in';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from './const';
import { FilmData } from './types/film';
import { PlayerData } from './types/player';

type AppScreenProps = {
  promo: FilmData,
  films: FilmData[]
  playerData: PlayerData
}


function App({ promo, films, playerData }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              promo={promo}
              films={films}
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
              data={playerData}
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
