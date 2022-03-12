import { useState, useEffect } from 'react';
// import { MouseEvent } from 'react';
import FilmNavigationItem from '../film-navigation-item/film-navigation-item';
import FilmNavigationItemActive from '../film-navigation-item-active/film-navigation-item-active';
import { CardTabName } from '../../const';

const TAB_NAME_LIST = ['Overview', 'Details', 'Reviews'];

type CardTabNavigationProps = {
  onClickTab: (name: string) => void;
}

function CardTabNavigation({ onClickTab }: CardTabNavigationProps): JSX.Element {
  const [activeItem, setActiveItem] = useState('Overview');

  useEffect(() => {
    onClickTab(activeItem);
  }, [activeItem]);

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

  const getName = () => {

    const names: string[] = [];
    Object.entries(CardTabName).forEach(([key, value]) => names.concat(value));
    return names;
  };

  return (
    <nav className="film-nav film-card__nav"
      onClick={onClickItem}
    >
      <ul className="film-nav__list">
        {
          getName()
          // CardTabName.map((name) => getNavigationItem(name))
        }
      </ul>
    </nav>
  );
}

export default CardTabNavigation;
