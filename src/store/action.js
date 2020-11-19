export const ActionType = {
  GET_READY_APP: `GET_READY_APP`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
  CHANGE_CITY: `CITY_CHANGE`,
  CHANGE_SORT: `CHANGE_SORT`,
  RESET_SORT: `RESET_SORT`,
  SET_USER: `SET_USER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const ActionCreator = {
  getReadyApp: () => ({
    type: ActionType.GET_READY_APP,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadNearOffers: (offers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  postReview: (reviewStatus) => ({
    type: ActionType.POST_REVIEW,
    payload: reviewStatus,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType,
  }),
  resetSort: () => ({
    type: ActionType.RESET_SORT,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
