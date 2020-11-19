import {connect} from "react-redux";
import {getNearOffers, getReviews, getAuthorizationStatus} from "@store/selectors";
import {fetchReviews, fetchNearOffers} from "@store/api-actions";
import {RoomScreen} from "./room-screen";

const mapStateToProps = (state) => ({
  nearOffers: getNearOffers(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    dispatch(fetchReviews(offerId));
  },
  loadNearOffers(offerId) {
    dispatch(fetchNearOffers(offerId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
