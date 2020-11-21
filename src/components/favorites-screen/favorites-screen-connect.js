import {connect} from "react-redux";
import {getAppStatus, getCities, getFavoriteOffers} from "@store/selectors";
import {fetchFavoriteOffers} from "@store/api-actions";
import {FavoritesScreen} from "./favorites-screen";
import {ActionCreator} from "@store/action";
import {AppStatus} from "@src/const";

const mapStateToProps = (state) => ({
  appStatus: getAppStatus(state),
  cities: getCities(state),
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData() {
    dispatch(ActionCreator.getReadyApp(AppStatus.APP_READY));
    dispatch(fetchFavoriteOffers())
    .then(() => {
      dispatch(ActionCreator.getReadyApp(AppStatus.PAGE_READY));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
