import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "@src/const";
import {adaptOfferToClient} from "@utils/offers";
import {adaptReviewToClient} from "@utils/reviews";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptOfferToClient))))
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + offerId)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
