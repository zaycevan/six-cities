import {getCities, getOffers} from "@store/selectors";

export const mapStateToProps = (state) => ({
  cities: getCities(state),
  offers: getOffers(state),
});
