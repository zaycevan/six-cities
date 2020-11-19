import {createSelector} from "reselect";
import {NameSpace} from "@store/reducers/root-reducer";

export const getCurrentSort = (state) => (state[NameSpace.SORT].currentSort);

export const getReviews = (state) => (state[NameSpace.REVIEWS].reviews);

export const getReviewStatus = (state) => (state[NameSpace.REVIEWS].reviewStatus);

export const getCities = (state) => (state[NameSpace.CITIES].cities);

export const getCurrentCity = (state) => (state[NameSpace.CITIES].currentCity);

export const getOffers = (state) => (state[NameSpace.OFFERS].offers);

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

export const getNearOffers = (state) => (state[NameSpace.OFFERS].nearOffers);

export const getAuthorizationStatus = (state) => {
  return (state[NameSpace.USER].authorizationStatus);
};

export const getUser = (state) => {
  return (state[NameSpace.USER].user);
};

export const getAppStatus = (state) => {
  return (state[NameSpace.APP].isAppReady);
};

