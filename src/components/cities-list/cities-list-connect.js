import {connect} from "react-redux";
import {ActionCreator} from "@store/action";
import {getCities, getCurrentCity} from "@store/selectors";
import {CitiesList} from "./cities-list";

export const mapStateToProps = (state) => ({
  cities: getCities(state),
  currentCity: getCurrentCity(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.resetSort());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
