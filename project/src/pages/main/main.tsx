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
import ButtonMore from '../../components/button-more/button-more';
import { useEffect, useState } from 'react';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';

type MainScreenProps = {
  promo: FilmData;
};

function MainPage({ promo }: MainScreenProps): JSX.Element {
  const { filterGenre, films, filmCountPerStep } = useAppSelector((state) => state);

  const [filmCount, setFilmCount] = useState(filmCountPerStep);


  useEffect(() => {
    setFilmCount(filmCountPerStep);
  }, [filterGenre, filmCountPerStep]);

  const onShowMore = () => {
    setFilmCount((prevCount) => prevCount + filmCountPerStep);
  };

  const displayFilm = getSameFilms(filterGenre, films);

  return (
    <div>
      <section className="film-card">
        <FilmCardBg background={promo.background} alt={promo.title} />

        <h1 className="visually-hidden">WTW</h1>

        <FilmCardHead />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster poster={promo.poster} alt={promo.title} />
            <FilmCardDesc data={promo}>
              <CardButtons />
            </FilmCardDesc>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList />

          <FilmList films={displayFilm.slice(0, filmCount)} />

          {(displayFilm.length > filmCount) && (<ButtonMore onShowMore={onShowMore} />)}
        </section>

        <Footer>
          <LogoLight />
        </Footer>
      </div>
    </div>
  );
}

export default MainPage;
