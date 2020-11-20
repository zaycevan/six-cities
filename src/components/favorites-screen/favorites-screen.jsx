import {Link} from "react-router-dom";
import Header from "@components/header/header-connect";
import FavoritesNoOffers from "@components/favorites-no-offers/favorites-no-offers";
import FavoritesList from "@components/favorites-list/favorites-list";
import {offersPropType} from "@utils/prop-types";
import {PageType, AppRoute} from "@src/const";

const FavoritesScreen = (props) => {
  const {cities, favoriteOffers} = props;

  return (
    <div className="page">
      <Header
        type={PageType.FAVORITE}
      />

      {favoriteOffers.length === 0 ?
        <FavoritesNoOffers /> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                favoriteOffers={favoriteOffers}
                cities={cities}
              />
            </section>
          </div>
        </main>
      }
      <footer className="footer container">
        <Link to={AppRoute.ROOT} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  favoriteOffers: offersPropType.isRequired,
};

export {FavoritesScreen};

