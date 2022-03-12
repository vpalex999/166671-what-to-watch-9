import { useState } from 'react';
// import { MouseEvent } from 'react';
import FilmNavigationItem from '../film-navigation-item/film-navigation-item';
import FilmNavigationItemActive from '../film-navigation-item-active/film-navigation-item-active';

const TAB_NAME_LIST = ['Overview', 'Details', 'Reviews'];

function CardTabNavigation(): JSX.Element {

  const [activeItem, setActiveItem] = useState('Overview');
  // FIXME: добавить типизацию на событие evt
  const onClickItem = (evt: any) => {
    evt.preventDefault();
    setActiveItem(evt.target.text);
  };

  const getNavigationItem = (name: string): JSX.Element => {
    switch (name) {
      case (activeItem):
        return <FilmNavigationItemActive key={name} name={name} />;
      default:
        return <FilmNavigationItem key={name} name={name} />;
    }
  };

  return (
    <nav className="film-nav film-card__nav"
      onClick={onClickItem}
    >
      <ul className="film-nav__list">
        {
          TAB_NAME_LIST.map((name) => getNavigationItem(name))
        }
      </ul>
    </nav>
  );
}

export default CardTabNavigation;
