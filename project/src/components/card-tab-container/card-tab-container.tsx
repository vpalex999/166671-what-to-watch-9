import { useState } from 'react';
import CardTabNavigation from '../card-tab-navigation/card-tab-navigation';
import CardTabDetails from '../card-tab-details/card-tab-details';
import CardTabOverview from '../card-tab-overview/card-tab-overview';
import CardTabReviews from '../card-tab-reviews/card-tab-reviews';
import { CardTabName } from '../../const';
import { FilmData } from '../../types/film';
import { ReviewData } from '../../types/review';

type TabContainerProps = {
  data: FilmData;
  reviews: ReviewData[]
}

function CardTabContainer({ data, reviews }: TabContainerProps): JSX.Element {

  const [activeTab, setActiveTab] = useState(CardTabName.Overview);

  const onClickTab = (name: string) => {
    setActiveTab(name);
  };

  const getActiveTab = () => {
    switch (activeTab) {
      case CardTabName.Overview:
        return <CardTabOverview data={data} />;
      case CardTabName.Details:
        return <CardTabDetails data={data} />;
      case CardTabName.Reviews:
        return <CardTabReviews data={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <CardTabNavigation onClickTab={onClickTab} />
      {getActiveTab()}
    </div>
  );
}

export default CardTabContainer;
