import {connect} from "react-redux";
import {getCities, getFavoriteOffers} from "@store/selectors";
import {FavoritesScreen} from "./favorites-screen";

const mapStateToProps = (state) => ({
  cities: getCities(state),
  favoriteOffers: getFavoriteOffers(state),
});

export default connect(mapStateToProps)(FavoritesScreen);
