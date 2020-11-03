import {createSelector} from "reselect";

const getCurrentCity = (state) => (state.currentCity);
const getOffers = (state) => (state.offers);
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

export const filteredOfferReviews = (reviews, reviewsId) => {
  return reviews.filter((review) => reviewsId.includes(review.id));
};
