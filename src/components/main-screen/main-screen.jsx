import {connect} from "react-redux";
import Header from "@components/header/header";
import CitiesList from "@components/cities-list/cities-list";
import SortForm from "@components/sort-form/sort-form";
import withSortOpen from "@hocs/with-sort-open/with-sort-open";
import PlacesList from "@components/places-list/places-list";
import Map from "@components/map/map";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";
import {filteredCityOffersSelector} from "@store/selectors";

const SortFormWrapped = withSortOpen(SortForm);

const MainScreen = (props) => {
  const {
    currentCity,
    offersForCity,
    currentSort,
    activeCardId,
    onActiveCard,
    outActiveCard
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header
        type={PageType.MAIN}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersForCity: offersPropType.isRequired,
  currentSort: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  onActiveCard: PropTypes.func.isRequired,
  outActiveCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersForCity: filteredCityOffersSelector(state),
  currentSort: state.currentSort,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
