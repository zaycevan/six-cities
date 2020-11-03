import {connect} from "react-redux";
import {ActionCreator} from "@store/action";

const CitiesList = (props) => {
  const {
    cities,
    currentCity,
    onCity
  } = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => (
          <li key={`${city}-${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`} href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCity(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.resetSort());
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
