type FilmNavLinkProps = {
  name: string;
  className?: string;
}

function FilmNavigationItem({ name, className }: FilmNavLinkProps): JSX.Element {
  return (
    <li className={`film-nav__item ${className}`}>
      <a href="#todo" className="film-nav__link">
        {name}
      </a>
    </li>
  );
}

export default FilmNavigationItem;
