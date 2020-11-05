import {filteredCityOffersSelector} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersForCity: filteredCityOffersSelector(state),
});
