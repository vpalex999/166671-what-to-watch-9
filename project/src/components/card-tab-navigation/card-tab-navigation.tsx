import { useState, useEffect } from 'react';
import FilmNavigationItem from '../film-navigation-item/film-navigation-item';
import FilmNavigationItemActive from '../film-navigation-item-active/film-navigation-item-active';
import {CardTabName, TAB_NAME_LIST} from '../../const';

type CardTabNavigationProps = {
  onClickTab: (name: string) => void;
}

function CardTabNavigation({ onClickTab }: CardTabNavigationProps): JSX.Element {
  const [activeItem, setActiveItem] = useState(CardTabName.Overview);

  useEffect(() => {
    onClickTab(activeItem);
  }, [activeItem, onClickTab]);

  const onClickItem = (name: string) => {
    setActiveItem(name);
  };

  const getNavigationItem = (name: string): JSX.Element => {
    switch (name) {
      case (activeItem):
        return <FilmNavigationItemActive key={name} name={name} onClick={onClickItem}/>;
      default:
        return <FilmNavigationItem key={name} name={name} onClick={onClickItem}/>;
    }
  };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list" >
        {
          TAB_NAME_LIST.map((name) => getNavigationItem(name))
        }
      </ul>
    </nav>
  );
}

export default CardTabNavigation;
