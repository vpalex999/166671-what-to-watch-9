import { Link } from 'react-router-dom';
import CardButtons from '../../components/card-buttons/card-buttons';
import FilmCardHead from '../../components/film-card-head/film-card-head';
import FilmList from '../../components/film-list/film-list';
import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';
import CardTabContainer from '../../components/card-tab-container/card-tab-container';
import { AppRoute } from '../../const';
import { mokFilmList } from '../../moks/films';
import { mokReviews } from '../../moks/review';
import FilmCardPosterBig from '../../components/film-card-poster-big/film-card-poster-big';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';

function FilmPage(): JSX.Element {

  const data = mokFilmList[0];
  const sameMovies = mokFilmList
    .filter((film) => (film.genre === data.genre) && (film.id !== data.id))
    .slice(0, 3);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBg backgroung={data.backgroung} alt={data.title}/>

          <h1 className="visually-hidden">WTW</h1>

          <FilmCardHead />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <CardButtons>
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  Add review
                </Link>
              </CardButtons>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPosterBig poster={data.poster} alt={data.title}/>
            <CardTabContainer data={data} reviews={mokReviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={sameMovies} />

        </section>

        <Footer>
          <LogoLight />
        </Footer>
      </div>
    </>
  );
}

export default FilmPage;
