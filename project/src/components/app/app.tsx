import Main from '../main/main';

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
    <Main
      promo={promo}
    />
  );
}

export default App;
