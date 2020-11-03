import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "@components/header/header";
import FavoritesList from "@components/favorites-list/favorites-list";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

const FavoritesScreen = (props) => {
  const {cities, offers} = props;

  return (
    <div className="page">
      <Header
        type={PageType.FAVORITE}
      />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              offers={offers}
              cities={cities}
            />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={`/`} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  offers: offersPropType.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  offers: state.offers,
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
