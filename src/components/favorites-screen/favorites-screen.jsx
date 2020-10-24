import {Link} from "react-router-dom";
import PlacesList from "@components/places-list/places-list";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

class FavoritesScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favoriteCards: [],
    };
  }

  render() {
    const {offers} = this.props;
    const favotiteAmsterdamOffers = [offers[0], offers[1]];
    const favotiteCologneOffers = [offers[2], offers[3]];

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={`/`} className="header__logo-link">
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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <PlacesList
                    placesListClassName="favorites__places"
                    offers={favotiteAmsterdamOffers}
                    type={PageType.FAVORITE}
                  />
                </li>
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <PlacesList
                    placesListClassName="favorites__places"
                    offers={favotiteCologneOffers}
                    type={PageType.FAVORITE}
                  />
                </li>
              </ul>
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
  }
}

FavoritesScreen.propTypes = {
  offers: offersPropType.isRequired,
};

export default FavoritesScreen;
