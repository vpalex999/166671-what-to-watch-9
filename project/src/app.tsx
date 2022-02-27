import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './pages/add-review/add-review';
import Film from './pages/film/film';
import Main from './pages/main/main';
import MyList from './pages/my-list/my-list';
import Play from './pages/play/play';
import SignIn from './pages/sign-in/sign-in';
import PrivateRoute from './components/private-route/private-route';
import NotFound from './pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from './const';
import { FilmData } from './types/film';
import { PlayerData } from './types/player';

type PromoFilm = {
  id: string;
  title: string;
  genre: string;
  year: number;
}

type AppScreenProps = {
  promo: PromoFilm,
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
            <Main
              promo={promo}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList
                films={films}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReview
              film={films[0]}
            />
          }
        />
        <Route
          path={AppRoute.Play}
          element={
            <Play
              data={playerData}
            />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
