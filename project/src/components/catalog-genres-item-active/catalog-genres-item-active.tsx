import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';

type CatalogGenresItemActiveProps = {
  genre: string;
}

function CatalogGenresItemActive({ genre }: CatalogGenresItemActiveProps): JSX.Element {
  return (
    <CatalogGenresItem genre={genre} className="catalog__genres-item--active" />
  );
}

export default CatalogGenresItemActive;
