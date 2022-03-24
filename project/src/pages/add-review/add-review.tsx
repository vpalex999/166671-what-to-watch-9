import AddReview from '../../components/add-review/add-review';
import FilmCardBg from '../../components/film-card-bg/film-card-bg';
import FilmCardPosterSmall from '../../components/film-card-poster-small/film-card-poster-small';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { FilmData } from '../../types/film';

type AddReviewPageProps = {
  film: FilmData;
}

function AddReviewPage({ film }: AddReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBg background={film.background} alt={film.title}/>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#todo" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <FilmCardPosterSmall poster={film.poster} alt={film.title} />
      </div>

      <AddReview />

    </section >
  );
}

export default AddReviewPage;
