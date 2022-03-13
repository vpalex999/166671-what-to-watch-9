import CardButtons from '../../components/card-buttons/card-buttons';
import FilmCardHead from '../../components/film-card-head/film-card-head';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmList from '../../components/film-list/film-list';
import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';
import { FilmData } from '../../types/film';

type MainScreenProps = {
  promo: FilmData;
  films: FilmData[];
};

function MainPage({ promo, films }: MainScreenProps): JSX.Element {
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#todo" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#todo" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>

          <FilmList films={films} />

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
