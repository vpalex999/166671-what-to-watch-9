import FilmList from '../../components/film-list/film-list';
import LogoLight from '../../components/logo-light/logo-light';
import Logo from '../../components/logo/logo';
import Footer from '../../components/page-footer/page-footer';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';

function MyListPage(): JSX.Element {
  const { myList } = useAppSelector(({ DATA }) => DATA);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={myList} />
      </section>

      <Footer>
        <LogoLight />
      </Footer>
    </div>
  );
}

export default MyListPage;
