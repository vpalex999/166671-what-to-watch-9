import { MouseEvent } from 'react';

type GenresItemProps = {
  genre: string;
  className?: string;
  onClick: (genre: string) => void;
};

function CatalogGenresItem(props: GenresItemProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${props.className || ''}`}>
      <a
        href="#todo"
        className="catalog__genres-link"
        onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
          evt.preventDefault();
          props.onClick(evt.currentTarget.innerHTML);
        }}
      >
        {props.genre}
      </a>
    </li>
  );
}

export default CatalogGenresItem;
