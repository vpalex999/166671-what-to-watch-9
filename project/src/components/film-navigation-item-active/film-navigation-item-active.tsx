import FilmNavigationItem from '../film-navigation-item/film-navigation-item';

type FilmNavLinkActiveProps = {
  name: string;
}

function FilmNavigationItemActive(props: FilmNavLinkActiveProps): JSX.Element {
  return (
    <FilmNavigationItem className="film-nav__item--active" {...props} />
  );
}

export default FilmNavigationItemActive;
