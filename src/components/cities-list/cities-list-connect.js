import {ActionCreator} from "@store/action";

export const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity,
});

export const mapDispatchToProps = (dispatch) => ({
  onCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.resetSort());
  },
});
