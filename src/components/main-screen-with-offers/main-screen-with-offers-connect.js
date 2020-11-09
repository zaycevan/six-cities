import {getCurrentCity, filteredCityOffersSelector, getCurrentSort} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offersForCity: filteredCityOffersSelector(state),
  currentSort: getCurrentSort(state),
});
