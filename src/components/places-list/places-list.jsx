import MainPlaceCard from "@components/main-place-card/main-place-card";
import FavoritePlaceCard from "@components/favorite-place-card/favorite-place-card";
import NearPlaceCard from "@components/near-place-card/near-place-card";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";
import {getSortedOffers} from "@utils/offers";

class PlacesList extends React.PureComponent {
  _getComponentByType(type, offer, onActiveCard, outActiveCard) {
    switch (type) {
      case PageType.MAIN:
        return (
          <MainPlaceCard
            key={offer.id}
            offer={offer}
            onActiveCard={onActiveCard}
            outActiveCard={outActiveCard}
          />
        );
      case PageType.FAVORITE:
        return (
          <FavoritePlaceCard
            key={offer.id}
            offer={offer}
          />
        );
      case PageType.NEAR:
        return (
          <NearPlaceCard
            key={offer.id}
            offer={offer}
            onActiveCard={onActiveCard}
            outActiveCard={outActiveCard}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const {
      placesListClassName,
      offersForCity,
      type,
      currentSort,
      onActiveCard,
      outActiveCard
    } = this.props;

    const sortedOffers = getSortedOffers(currentSort, offersForCity);

    return (
      <div className={`${placesListClassName}`}>
        {sortedOffers.map((offer) => (
          this._getComponentByType(type, offer, onActiveCard, outActiveCard)
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesListClassName: PropTypes.string.isRequired,
  offersForCity: offersPropType.isRequired,
  type: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  onActiveCard: PropTypes.func,
  outActiveCard: PropTypes.func,
};

export default PlacesList;
