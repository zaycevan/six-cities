import SortForm from "@components/sort-form/sort-form-connect";
import withSortOpen from "@hocs/with-sort-open/with-sort-open";
import PlacesList from "@components/places-list/places-list";
import Map from "@components/map/map";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

const SortFormWrapped = withSortOpen(SortForm);

const MainScreenWithOffers = (props) => {
  const {
    currentCity,
    offersForCity,
    currentSort,
    activeCardId,
    onActiveCard,
    outActiveCard
  } = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersForCity.length} places to stay in {currentCity}</b>
        <SortFormWrapped />
        <PlacesList
          placesListClassName="cities__places-list places__list tabs__content"
          offersForCity={offersForCity}
          type={PageType.MAIN}
          currentSort={currentSort}
          onActiveCard={onActiveCard}
          outActiveCard={outActiveCard}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offersForCity={offersForCity}
          activeCardId={activeCardId}
          mapClassName="cities__map"
        />
      </div>
    </div>
  );
};

MainScreenWithOffers.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersForCity: offersPropType.isRequired,
  currentSort: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  onActiveCard: PropTypes.func.isRequired,
  outActiveCard: PropTypes.func.isRequired,
};

export {MainScreenWithOffers};
