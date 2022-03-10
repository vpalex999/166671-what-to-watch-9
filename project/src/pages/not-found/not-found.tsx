import { Link } from 'react-router-dom';
import Footer from '../../components/page-footer/page-footer';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page-content">
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>

      <Footer>
        <div className="logo">
          <Link to={AppRoute.Root} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
      </Footer>
    </div>
  );
}

export default NotFoundPage;
