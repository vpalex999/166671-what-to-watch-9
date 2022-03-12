import { useState } from 'react';
import CardTabNavigation from '../card-tab-navigation/card--tab-navigation';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import { CardTabName } from '../../const';


function TabContainer(): JSX.Element {

  const [activeTab, setActiveTab] = useState('Overview');

  const onClickTab = (name: string) => {
    setActiveTab(name);
  };

  const getActiveTab = () => {
    switch (activeTab) {
      case CardTabName.Overview:
        return <FilmOverview />;
      case CardTabName.Details:
        return <FilmDetails />;
      case CardTabName.Reviews:
        return <FilmReviews />;
    }
  };

  return (
    <div className="film-card__desc">
      <CardTabNavigation onClickTab={onClickTab} />
      {getActiveTab()}
    </div>
  );
}

export default TabContainer;
