import {connect} from "react-redux";
import {getCurrentCity, filteredCityOffersSelector} from "@store/selectors";
import {MainScreen} from "./main-screen";

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offersForCity: filteredCityOffersSelector(state),
});

export default connect(mapStateToProps)(MainScreen);
