import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import {RoomScreen} from "./room-screen";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <RoomScreen
          appStatus={`PAGE_READY`}
          nearOffers={TestMockData.offers}
          reviews={TestMockData.reviews}
          reviewStatus={`BEFORE_SENT`}
          authorizationStatus={`AUTH`}
          favoriteOfferStatus={`BEFORE_SENT`}
          loadData={noop}
          offer={TestMockData.offer}
          onFavoriteButtonClick={noop}
          activeCardId={1}
          onActiveCard={noop}
          outActiveCard={noop}
        />
      </Router>
    </Provider>
);

it(`Should RoomScreen render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
