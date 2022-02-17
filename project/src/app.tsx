import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './pages/add-review/add-review';
import Film from './pages/film/film';
import Main from './pages/main/main';
import MyList from './pages/my-list/my-list';
import Play from './pages/play/play';
import SignIn from './pages/sign-in/sign-in';
import NotFound from './pages/not-found/not-found';

type PromoFilm = {
  title: string;
  genre: string;
  year: number;
}

type AppScreenProps = {
  promo: PromoFilm
}


function App({ promo }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main promo={promo} />}
        />
        <Route
          path="/login"
          element={<SignIn />}
        />
        <Route
          path="/mylist"
          element={<MyList />}
        />
        <Route
          path="/films/:id"
          element={<Film />}
        />
        <Route
          path="/films/:id/review"
          element={<AddReview />}
        />
        <Route
          path="/player/:id"
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
