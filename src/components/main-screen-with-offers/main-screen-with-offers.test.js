import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import MainScreenWithOffers from "./main-screen-with-offers-connect";
import {TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <MainScreenWithOffers
          activeCardId={1}
          onActiveCard={noop}
          outActiveCard={noop}
        />
      </Router>
    </Provider>
);

it(`Should MainScreenWithOffers render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
