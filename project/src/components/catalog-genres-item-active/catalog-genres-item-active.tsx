import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';

type CatalogGenresItemActiveProps = {
  genre: string;
  onClick: (genre: string) => void
}

function CatalogGenresItemActive(props: CatalogGenresItemActiveProps): JSX.Element {
  return (
    <CatalogGenresItem className="catalog__genres-item--active" {...props}/>
  );
}

export default CatalogGenresItemActive;
