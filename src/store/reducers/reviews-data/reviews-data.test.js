import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@src/services/api";
import {reviewsData} from "./reviews-data";
import {ActionType} from "@store/action";
import {fetchReviews, postReview} from "@store/api-actions";
import {APIRoute} from "@src/const";
import {TestMockData} from "@src/mocks/test-mocks";

const api = createAPI(() => {});

it(`Reducer reviewsData without additional parameters should return initial state`, () => {
  expect(reviewsData(void 0, {})).toEqual({
    reviews: [],
    reviewStatus: `BEFORE_SENT`
  });
});

it(`Reducer reviewsData should update reviews by load reviews`, () => {
  expect(reviewsData({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: TestMockData.reviews,
  })).toEqual({
    reviews: TestMockData.reviews,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(1);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(200, TestMockData.reviewsFromServer);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: TestMockData.reviews,
        });
      });
  });

  it(`Should make a correct API call for post review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const review = {
      comment: TestMockData.review.text,
      rating: TestMockData.review.rating
    };
    const reviewsPoster = postReview(1, review);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(200, TestMockData.reviewsFromServer);

    return reviewsPoster(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: TestMockData.reviews,
        });
      });
  });
});
