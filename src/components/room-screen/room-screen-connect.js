import {filteredNearOffersSelector, getReviews} from "@store/selectors";

export const mapStateToProps = (state) => ({
  nearOffers: filteredNearOffersSelector(state),
  reviews: getReviews(state),
});
