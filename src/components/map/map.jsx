import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {offersPropType} from "@utils/prop-types";
import {CITIES_COORDINATES} from "@src/const";

class Map extends React.PureComponent {

  componentDidMount() {
    const {currentCity} = this.props;
    const city = CITIES_COORDINATES[currentCity];
    const zoom = 13;

    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    this._setupMap();
  }

  componentDidUpdate() {
    this._layerGroup.clearLayers();
    this._setupMap();
  }

  _setupMap() {
    const {currentCity, offersForCity, activeCardId} = this.props;

    const city = CITIES_COORDINATES[currentCity];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const zoom = 13;

    let filteredOffers = offersForCity;
    let activeOffer = null;

    if (activeCardId) {
      filteredOffers = offersForCity.filter((offer) => offer.id !== activeCardId);
      activeOffer = offersForCity.find((offer) => offer.id === activeCardId);
    }

    this._map.setView(city, zoom);

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

  render() {
    const {mapClassName} = this.props;

    return (
      <section id="map" className={`${mapClassName} map`}></section>
    );
  }
}

Map.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersForCity: offersPropType.isRequired,
  activeCardId: PropTypes.number,
  mapClassName: PropTypes.string.isRequired
};

export default Map;
