import {connect} from "react-redux";
import {getNearOffers, getReviews, getAuthorizationStatus, getFavoriteOfferStatus} from "@store/selectors";
import {fetchReviews, fetchNearOffers, postFavoriteOffer} from "@store/api-actions";
import {RoomScreen} from "./room-screen";

const mapStateToProps = (state) => ({
  nearOffers: getNearOffers(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteOfferStatus: getFavoriteOfferStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    dispatch(fetchReviews(offerId));
  },
  loadNearOffers(offerId) {
    dispatch(fetchNearOffers(offerId));
  },
  onFavoriteButtonClick(offerId, status) {
    dispatch(postFavoriteOffer(offerId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
