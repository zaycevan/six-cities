import MainPlaceCard from "@components/main-place-card/main-place-card";
import FavoritePlaceCard from "@components/favorite-place-card/favorite-place-card";
import NearPlaceCard from "@components/near-place-card/near-place-card";
import {offersPropType} from "@utils/prop-types";
import {PageType} from "@src/const";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  _getComponentByType(type, offer) {
    switch (type) {
      case PageType.MAIN:
        return (
          <MainPlaceCard
            key={offer.id}
            offer={offer}
            onCard={() => {
              this.setState({activeCard: offer});
            }}
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
            onCard={() => {
              this.setState({activeCard: offer});
            }}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const {placesListClassName, offers, type} = this.props;

    return (
      <div className={`${placesListClassName}`}>
        {offers.map((offer) => (
          this._getComponentByType(type, offer)
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesListClassName: PropTypes.string.isRequired,
  offers: offersPropType.isRequired,
  type: PropTypes.string.isRequired
};

export default PlacesList;
