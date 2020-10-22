import MainPlaceCard from "components/main-place-card/main-place-card";
import {offersPropType} from "utils/prop-types";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <MainPlaceCard
            key={offer.id}
            offer={offer}
            onCard={() => {
              this.setState({activeCard: offer});
            }}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: offersPropType.isRequired,
};

export default PlacesList;
