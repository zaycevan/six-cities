import {offersPropType} from "@utils/prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.PureComponent {
  _renderMap() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    const {offersForCity, activeCardId} = this.props;

    let filteredOffers = offersForCity;
    let activeOffer = null;

    if (activeCardId) {
      filteredOffers = offersForCity.filter((offer) => offer.id !== activeCardId);
      activeOffer = offersForCity.find((offer) => offer.id === activeCardId);
    }

    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    filteredOffers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this._map);
    });

    if (activeOffer) {
      leaflet
        .marker(activeOffer.coordinates, {icon: activeIcon})
        .addTo(this._map);
    }
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._map.remove();
    this._renderMap();
  }

  render() {
    const {mapClassName} = this.props;

    return (
      <section id="map" className={`${mapClassName} map`}></section>
    );
  }
}

Map.propTypes = {
  offersForCity: offersPropType.isRequired,
  activeCardId: PropTypes.number,
  mapClassName: PropTypes.string.isRequired
};

export default Map;
