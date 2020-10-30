import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "@store/action";
import CitiesList from "@components/cities-list/cities-list";
import SortList from "@components/sort-list/sort-list";
import PlacesList from "@components/places-list/places-list";
import Map from "@components/map/map";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

const MainScreen = (props) => {
  const {
    currentCity,
    offersForCity,
    currentSort,
    onOpenSort
  } = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={`/`} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={`/login`} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0"
                  onClick={onOpenSort}>
                  {currentSort}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortList />
              </form>
              <PlacesList
                placesListClassName="cities__places-list places__list tabs__content"
                type={PageType.MAIN}
              />
            </section>
            <div className="cities__right-section">
              <Map
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
  onOpenSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersForCity: state.offersForCity,
  currentSort: state.currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenSort() {
    dispatch(ActionCreator.openSort());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
