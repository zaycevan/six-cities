import {ActionCreator, ActionType} from "./action";
import {TestMockData} from "@src/mocks/test-mocks";

describe(`Action creators work correctly`, () => {
  it(`Action creator for get ready App returns correct payload`, () => {
    expect(ActionCreator.getReadyApp(`APP_READY`)).toEqual({
      type: ActionType.GET_READY_APP,
      payload: `APP_READY`,
    });
  });

  it(`Action creator for load offers returns correct payload`, () => {
    expect(ActionCreator.loadOffers(TestMockData.offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: TestMockData.offers,
    });
  });

  it(`Action creator for load near offers returns correct payload`, () => {
    expect(ActionCreator.loadNearOffers(TestMockData.offers)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: TestMockData.offers,
    });
  });

  it(`Action creator for load favorite offers returns correct payload`, () => {
    expect(ActionCreator.loadFavoriteOffers(TestMockData.offers)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: TestMockData.offers,
    });
  });

  it(`Action creator for post favorite offers returns correct payload`, () => {
    expect(ActionCreator.postFavoriteOffer(`SENT`)).toEqual({
      type: ActionType.POST_FAVORITE_OFFER,
      payload: `SENT`,
    });
  });

  it(`Action creator for post favorite offers returns correct payload`, () => {
    expect(ActionCreator.addFavoriteOfferId(1)).toEqual({
      type: ActionType.ADD_FAVORITE_OFFER_ID,
      payload: 1,
    });
  });

  it(`Action creator for load reviews returns correct payload`, () => {
    expect(ActionCreator.loadReviews(TestMockData.reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: TestMockData.reviews,
    });
  });

  it(`Action creator for post review returns correct payload`, () => {
    expect(ActionCreator.postReview(`SENT`)).toEqual({
      type: ActionType.POST_REVIEW,
      payload: `SENT`,
    });
  });

  it(`Action creator for change city returns correct payload`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for change sort returns correct payload`, () => {
    expect(ActionCreator.changeSort(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: `Popular`,
    });
  });

  it(`Action creator for reset sort returns correct payload`, () => {
    expect(ActionCreator.resetSort()).toEqual({
      type: ActionType.RESET_SORT,
    });
  });

  it(`Action creator for set user returns correct payload`, () => {
    expect(ActionCreator.setUser(`User`)).toEqual({
      type: ActionType.SET_USER,
      payload: `User`,
    });
  });

  it(`Action creator for require authorization returns correct payload`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for redirect to route returns correct payload`, () => {
    expect(ActionCreator.redirectToRoute(`url`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    });
  });
});
