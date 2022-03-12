import CardTabNavigation from '../card-tab-navigation/card--tab-navigation';
import FilmOverview from '../film-overview/film-overview';

function TabContainer(): JSX.Element {
  return (
    <div className="film-card__desc">
      <CardTabNavigation />
      <FilmOverview />
    </div>
  );
}


export default TabContainer;
