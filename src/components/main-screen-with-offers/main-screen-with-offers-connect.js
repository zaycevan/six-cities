import {connect} from "react-redux";
import {getCurrentCity, getOffersForCurrentCity, getCurrentSort} from "@store/selectors";
import {MainScreenWithOffers} from "./main-screen-with-offers";

export const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offersForCity: getOffersForCurrentCity(state),
  currentSort: getCurrentSort(state),
});

export default connect(mapStateToProps)(MainScreenWithOffers);
