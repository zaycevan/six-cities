import Header from "@components/header/header-connect";
import CitiesList from "@components/cities-list/cities-list-connect";
import MainScreenNoOffers from "@components/main-screen-no-offers/main-screen-no-offers";
import MainScreenWithOffers from "@components/main-screen-with-offers/main-screen-with-offers-connect";
import withActiveCard from "@hocs/with-active-card/with-active-card";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

const MainScreenWithOffersWrapped = withActiveCard(MainScreenWithOffers);

const MainScreen = (props) => {
  const {
    currentCity,
    offersForCity,
  } = props;

  return (
    <div className={`page page--gray page--main ${offersForCity.length === 0 ? `page__main--index-empty` : ``}`}>
      <Header
        type={PageType.MAIN}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {offersForCity.length === 0 ?
            <MainScreenNoOffers
              currentCity={currentCity}
            /> :
            <MainScreenWithOffersWrapped />
          }
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersForCity: offersPropType.isRequired,
};

export {MainScreen};
