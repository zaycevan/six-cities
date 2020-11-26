import {connect} from "react-redux";
import {getCurrentCity, getOffersForCurrentCity} from "@store/selectors";
import {MainScreen} from "./main-screen";

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offersForCity: getOffersForCurrentCity(state),
});

export default connect(mapStateToProps)(MainScreen);
