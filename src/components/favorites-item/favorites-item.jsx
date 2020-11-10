import {Link} from "react-router-dom";
import PlacesList from "@components/places-list/places-list";
import {offersPropType} from "@utils/prop-types";
import {PageType, SortType, AppRoute} from "@src/const";

const FavoritesItem = (props) => {
  const {
    city,
    favoriteCityOffers
  } = props;

  if (favoriteCityOffers.length === 0) {
    return null;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.ROOT} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <PlacesList
        placesListClassName="favorites__places"
        offersForCity={favoriteCityOffers}
        type={PageType.FAVORITE}
        currentSort={SortType.POPULAR}
      />
    </li>
  );
};

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteCityOffers: offersPropType.isRequired,
};

export default FavoritesItem;
