import {connect} from "react-redux";
import {getAuthorizationStatus, getFavoriteOfferStatus, getFavoriteOfferId} from "@store/selectors";
import {postFavoriteOffer} from "@store/api-actions";
import {PlaceCard} from "./place-card";

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  favoriteOfferStatus: getFavoriteOfferStatus(state),
  favoriteOfferId: getFavoriteOfferId(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(offerId, status) {
    dispatch(postFavoriteOffer(offerId, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
