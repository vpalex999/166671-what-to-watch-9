import LogoLight from '../../components/logo-light/logo-light';
import Footer from '../../components/page-footer/page-footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page-content">
      <h1>404. Page not found</h1>
      <a href="/">Вернуться на главную</a>

      <Footer>
        <LogoLight />
      </Footer>
    </div>
  );
}

export default NotFoundPage;
