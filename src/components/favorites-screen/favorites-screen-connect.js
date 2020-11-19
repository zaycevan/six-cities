import {connect} from "react-redux";
import {getCities, getOffers} from "@store/selectors";
import {FavoritesScreen} from "./favorites-screen";

export const mapStateToProps = (state) => ({
  cities: getCities(state),
  offers: getOffers(state),
});

export default connect(mapStateToProps)(FavoritesScreen);
