import {offersPropType} from "@utils/prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    const {offers} = this.props;

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });
  }

  componentWillUnmount() {
  }

  render() {
    const {mapClassName} = this.props;

    return (
      <section id="map" className={`${mapClassName} map`}></section>
    );
  }
}

Map.propTypes = {
  offers: offersPropType.isRequired,
  mapClassName: PropTypes.string.isRequired
};

export default Map;
