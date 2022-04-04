import { Link, useParams } from 'react-router-dom';
import CardButtons from '../../components/card-buttons/card-buttons';
import FilmCardHead from '../../components/film-card-head/film-card-head';
import FilmList from '../../components/film-list/film-list';
import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';
import CardTabContainer from '../../components/card-tab-container/card-tab-container';
import { APIRoute, AppRoute } from '../../const';
import FilmCardPosterBig from '../../components/film-card-poster-big/film-card-poster-big';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import { FilmData, FilmDataServer } from '../../types/film';
import { api } from '../../store';
import { errorHandle } from '../../services/error-handle';
import { adaptCommentToClient, adaptFilmToClient } from '../../util';
import { useEffect, useState } from 'react';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { ReviewData, ReviewDataServer } from '../../types/review';

// TODO:
// Напишите всю необходимую логику для получения информации по одному фильму на странице «Film».
// 1. Когда пользователь переходит на страницу с детальной информацией о фильме (/films/:id),
//    с сервера должна быть запрошена информация только по этому фильму.
// 2. Дополнительно нужно запросить информацию по похожим фильмам
// 3. и списку комментариев к фильму.

const getMovieAPI = async (id: number) => {
  try {
    const { data } = await api.get<FilmDataServer>(`${APIRoute.Films}/${id}`);
    return adaptFilmToClient(data);
  } catch (error) {
    errorHandle(error);
  }
};

const getSameMoviesAPI = async (id: number) => {
  try {
    const { data } = await api.get<FilmDataServer[]>(`${APIRoute.Films}/${id}/similar`);
    return data
      .map((movie) => adaptFilmToClient(movie))
      .slice(0, 3);
  } catch (error) {
    errorHandle(error);
  }
};

const getCommentsAPI = async (filmId: number) => {
  try {
    const { data } = await api.get<ReviewDataServer[]>(`${APIRoute.Comments}/${filmId}`);
    return data.map((comment) => adaptCommentToClient(comment));
  } catch (error) {
    errorHandle(error);
  }
};

function FilmPage(): JSX.Element {

  const params = useParams();
  const [film, setFilm] = useState<FilmData | null>(null);
  const [sameFilms, setSameFilms] = useState<FilmData[]>([]);
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  const getFilmContent = async () => {
    if (params.id) {
      const data = await getMovieAPI(Number(params.id));

      if (data) {
        setFilm(data);
      }
    }
  };

  const getSameFilmContent = async () => {
    if (params.id) {
      const data = await getSameMoviesAPI(Number(params.id));
      if (data) {
        setSameFilms(data);
      }
    }
  };

  const getCommentsContent = async () => {
    if (params.id) {
      const data = await getCommentsAPI(Number(params.id));
      if (data) {
        setReviews(data);
      }
    }
  };

  useEffect(() => {
    getFilmContent();
    getSameFilmContent();
    getCommentsContent();
  }, []);

  const data = film;

  if (data === null) {
    return (<LoadingScreen />);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBg background={data.background} alt={data.title} />

          <h1 className="visually-hidden">WTW</h1>

          <FilmCardHead />

          <div className="film-card__wrap">
            <FilmCardDesc data={data}>
              <CardButtons>
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  Add review
                </Link>
              </CardButtons>
            </FilmCardDesc>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPosterBig poster={data.poster} alt={data.title} />
            <CardTabContainer data={data} reviews={reviews} />
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
