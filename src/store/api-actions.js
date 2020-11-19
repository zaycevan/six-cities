import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute, ReviewStatus} from "@src/const";
import {adaptOfferToClient} from "@utils/offers";
import {adaptReviewToClient} from "@utils/reviews";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptOfferToClient))))
);

export const fetchReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${offerId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient)));
    })
);

export const postReview = (offerId, {comment, rating}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.postReview(ReviewStatus.PENDING));
  api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient)));
      dispatch(ActionCreator.postReview(ReviewStatus.SENT));
    })
    .then(() => dispatch(ActionCreator.postReview(ReviewStatus.BEFORE_SENT)))
    .catch(() => {
      dispatch(ActionCreator.postReview(ReviewStatus.FAILURE));
    });
};

export const fetchNearOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearOffers(data.map(adaptOfferToClient)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUser(response.data.email));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
