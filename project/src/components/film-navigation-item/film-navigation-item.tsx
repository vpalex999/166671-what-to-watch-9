import {MouseEvent} from 'react';

type FilmNavLinkProps = {
  name: string;
  className?: string;
  onClick: (name: string) => void;
}

function FilmNavigationItem({ name, className, onClick }: FilmNavLinkProps): JSX.Element {
  return (
    <li className={`film-nav__item ${className}`}>
      <a href="#todo" className="film-nav__link"
        onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
          evt.preventDefault();
          onClick(evt.currentTarget.innerText);
        }}
      >
        {name}
      </a>
    </li>
  );
}

export default FilmNavigationItem;
