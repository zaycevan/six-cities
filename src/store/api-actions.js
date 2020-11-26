import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute, PostStatus} from "@src/const";
import {adaptOfferToClient} from "@utils/offers";
import {adaptReviewToClient} from "@utils/reviews";
import {showError} from "@utils/common";

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
  dispatch(ActionCreator.postReview(PostStatus.PENDING));
  return api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient)));
      dispatch(ActionCreator.postReview(PostStatus.SENT));
    })
    .then(() => dispatch(ActionCreator.postReview(PostStatus.BEFORE_SENT)))
    .catch(() => {
      dispatch(ActionCreator.postReview(PostStatus.FAILURE));
    });
};

export const fetchNearOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.loadNearOffers(data.map(adaptOfferToClient)));
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteOffers(data.map(adaptOfferToClient)));
    })
);

export const postFavoriteOffer = (offerId, status) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.postFavoriteOffer(PostStatus.PENDING));
  dispatch(ActionCreator.addFavoriteOfferId(offerId));
  return api.post(`${APIRoute.FAVORITE}/${offerId}/${status}`)
    .then(() => {
      dispatch(fetchFavoriteOffers());
      dispatch(fetchOffers());
      dispatch(fetchNearOffers(offerId));
      dispatch(ActionCreator.postFavoriteOffer(PostStatus.SENT));
    })
    .then(() => dispatch(ActionCreator.postFavoriteOffer(PostStatus.BEFORE_SENT)))
    .catch(() => {
      dispatch(ActionCreator.postFavoriteOffer(PostStatus.FAILURE));
    });
};

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
    .then(() => {
      dispatch(ActionCreator.setUser(email));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((err) => {
      showError(err);
    })
);
