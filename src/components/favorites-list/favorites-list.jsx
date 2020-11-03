import FavoritesItem from "@components/favorites-item/favorites-item";
import {offersPropType} from "@utils/prop-types";
import {filteredFavoriteOffers} from "@store/selectors";


const FavoritesList = (props) => {
  const {
    cities,
    offers
  } = props;

  return (
    <ul className="favorites__list">
      {cities.map((city, i) => (
        <FavoritesItem
          key={`${city}-${i}`}
          city={city}
          favoriteCityOffers={filteredFavoriteOffers(city, offers)}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  offers: offersPropType.isRequired,
};

export default FavoritesList;
