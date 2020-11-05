import {filteredNearOffersSelector} from "@store/selectors";

export const mapStateToProps = (state) => ({
  nearOffers: filteredNearOffersSelector(state),
  reviews: state.reviews,
});
