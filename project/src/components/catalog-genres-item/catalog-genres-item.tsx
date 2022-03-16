type GenresItemProps = {
  genre: string;
  className?: string;
}

function CatalogGenresItem(props: GenresItemProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${props.className || ''}`} >
      <a href="#todo" className="catalog__genres-link">
        {props.genre}
      </a>
    </li >
  );
}


export default CatalogGenresItem;
