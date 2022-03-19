import CardButtons from '../../components/card-buttons/card-buttons';
import FilmCardHead from '../../components/film-card-head/film-card-head';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmList from '../../components/film-list/film-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';
import { FilmData } from '../../types/film';
import { useAppSelector } from '../../hooks';
import { getSameFilms } from '../../util';

type MainScreenProps = {
  promo: FilmData;
};

function MainPage({ promo }: MainScreenProps): JSX.Element {
  const filterGenre = useAppSelector((state) => state.filterGenre);
  const films = useAppSelector((state) => state.films);

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroung} alt={promo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <FilmCardHead />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster poster={promo.poster} alt={promo.title} />

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>
              <CardButtons />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList />

          <FilmList films={getSameFilms(filterGenre, films)} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer>
          <LogoLight />
        </Footer>
      </div>
    </div>
  );
}

export default MainPage;
