import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ReviewFrom from "./review-form-connect";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <ReviewFrom
        offer={TestMockData.offer}
        reviewStatus={`BEFORE_SENT`}
        offerId={1}
        onSubmit={noop}
        onChange={noop}
        comment={TestMockData.review.text}
        rating={`4`}
      />
    </Provider>
);

it(`Should ReviewFrom render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
