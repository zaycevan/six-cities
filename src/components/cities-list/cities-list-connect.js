import {ActionCreator} from "@store/action";
import {getCities, getCurrentCity} from "@store/selectors";

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
