import FavoritesItem from "@components/favorites-item/favorites-item";
import {offersPropType} from "@utils/prop-types";
import {getOffersForCity} from "@utils/common";

const FavoritesList = (props) => {
  const {
    cities,
    favoriteOffers
  } = props;

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => (
        <FavoritesItem
          key={`${city}-${i}`}
          city={city}
          favoriteCityOffers={getOffersForCity(city, favoriteOffers)}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  favoriteOffers: offersPropType.isRequired,
};

export default FavoritesList;
