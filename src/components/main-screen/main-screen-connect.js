import {getCurrentCity, filteredCityOffersSelector} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offersForCity: filteredCityOffersSelector(state),
});
