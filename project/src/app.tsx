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

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
}

type AppScreenProps = {
  promo: PromoFilm,
  films: FilmData[]
}


function App({ promo, films }: AppScreenProps): JSX.Element {
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
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Play}
          element={<Play />}
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
