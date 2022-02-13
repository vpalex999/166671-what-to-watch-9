import Main from '../main/main';

type AppScreenProps = {
  promoTitle: string;
  promoGenre: string;
  promoYear: number;
}

function App({ promoTitle, promoGenre, promoYear }: AppScreenProps): JSX.Element {
  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoYear={promoYear}
    />
  );
}

export default App;
