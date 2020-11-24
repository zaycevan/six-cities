import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@src/services/api";
import {offersData} from "./offers-data";
import {ActionType} from "@store/action";
import {fetchOffers, fetchNearOffers, postFavoriteOffer} from "@store/api-actions";
import {APIRoute} from "@src/const";
import {TestMockData} from "@src/mocks/test-mocks";

const api = createAPI(() => {});

it(`Reducer offersData without additional parameters should return initial state`, () => {
  expect(offersData(void 0, {})).toEqual({
    offers: [],
    nearOffers: [],
    favoriteOffers: [],
    favoriteOfferStatus: `BEFORE_SENT`,
    favoriteOfferId: null
  });
});

it(`Reducer offersData should update offers by load offers`, () => {
  expect(offersData({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: TestMockData.offers,
  })).toEqual({
    offers: TestMockData.offers,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, TestMockData.offersFromServer);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: TestMockData.offers,
        });
      });
  });

  it(`Should make a correct API call to /nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchNearOffers(1);

    apiMock
      .onGet(`${APIRoute.HOTELS}/1/nearby`)
      .reply(200, TestMockData.offersFromServer);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_OFFERS,
          payload: TestMockData.offers,
        });
      });
  });

  it(`Should make a correct API call for post favorite offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerPoster = postFavoriteOffer(1, 1);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, TestMockData.offerFromServer);

    return offerPoster(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(7);
        expect(dispatch).toHaveBeenNthCalledWith(6, {
          type: ActionType.POST_FAVORITE_OFFER,
          payload: `SENT`,
        });
      });
  });
});
