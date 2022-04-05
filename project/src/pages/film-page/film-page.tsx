import { Link, useParams } from 'react-router-dom';
import CardButtons from '../../components/card-buttons/card-buttons';
import FilmCardHead from '../../components/film-card-head/film-card-head';
import FilmList from '../../components/film-list/film-list';
import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';
import CardTabContainer from '../../components/card-tab-container/card-tab-container';
import { AppRoute } from '../../const';
import FilmCardPosterBig from '../../components/film-card-poster-big/film-card-poster-big';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchReviewsAction, fetchSameFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';

// TODO:
// Напишите всю необходимую логику для получения информации по одному фильму на странице «Film».
// 1. Когда пользователь переходит на страницу с детальной информацией о фильме (/films/:id),
//    с сервера должна быть запрошена информация только по этому фильму.
// 2. Дополнительно нужно запросить информацию по похожим фильмам
// 3. и списку комментариев к фильму.

function FilmPage(): JSX.Element {

  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const filmId = Number(id);
      dispatch(fetchSameFilmsAction(filmId));
      dispatch(fetchFilmAction(filmId));
      dispatch(fetchReviewsAction(filmId));
    }
  }, [id, dispatch]);

  const { film, sameFilms, reviews } = useAppSelector((state) => state);

  if (film === null) {
    return (<LoadingScreen />);
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBg background={film.background} alt={film.title} />

          <h1 className="visually-hidden">WTW</h1>

          <FilmCardHead />

          <div className="film-card__wrap">
            <FilmCardDesc data={film}>
              <CardButtons>
                <Link to={`${AppRoute.Films}/${id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </CardButtons>
            </FilmCardDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPosterBig poster={film.poster} alt={film.title} />
            <CardTabContainer data={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={sameFilms} />

        </section>

        <Footer>
          <LogoLight />
        </Footer>
      </div>
    </>
  );
}

export default FilmPage;
