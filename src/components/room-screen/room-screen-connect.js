import {connect} from "react-redux";
import {getAppStatus, getNearOffers, getReviews, getAuthorizationStatus, getFavoriteOfferStatus, getReviewStatus} from "@store/selectors";
import {fetchReviews, fetchNearOffers, postFavoriteOffer} from "@store/api-actions";
import {ActionCreator} from "@store/action";
import {RoomScreen} from "./room-screen";
import {AppStatus} from "@src/const";

const mapStateToProps = (state) => ({
  appStatus: getAppStatus(state),
  nearOffers: getNearOffers(state),
  reviews: getReviews(state),
  reviewStatus: getReviewStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteOfferStatus: getFavoriteOfferStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData(offerId) {
    dispatch(ActionCreator.getReadyApp(AppStatus.APP_READY));
    Promise.all([
      dispatch(fetchReviews(offerId)),
      dispatch(fetchNearOffers(offerId))
    ])
    .then(() => {
      dispatch(ActionCreator.getReadyApp(AppStatus.PAGE_READY));
    });
  },
  onFavoriteButtonClick(offerId, status) {
    dispatch(postFavoriteOffer(offerId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
