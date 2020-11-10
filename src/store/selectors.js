import {createSelector} from "reselect";

export const getCurrentSort = (state) => (state.SORT.currentSort);

export const getReviews = (state) => (state.REVIEWS.reviews);

export const getCities = (state) => (state.CITIES.cities);

export const getCurrentCity = (state) => (state.CITIES.currentCity);

export const getOffers = (state) => (state.OFFERS.offers);

const filteredCityOffers = (city, offers) => {
  return offers.filter((offer) => offer.city === city);
};
export const filteredCityOffersSelector = createSelector(
    [getCurrentCity, getOffers],
    (currentCity, offers) => (filteredCityOffers(currentCity, offers))
);

export const filteredFavoriteOffers = (city, offers) => {
  return filteredCityOffers(city, offers).filter((offer) => offer.isFavorite === true);
};

const filteredNearOffers = (offers) => {
  return offers.slice(0, 3);
};
export const filteredNearOffersSelector = createSelector(
    getOffers,
    (offers) => (filteredNearOffers(offers))
);

export const getAuthorizationStatus = (state) => {
  return (state.USER.authorizationStatus);
};
