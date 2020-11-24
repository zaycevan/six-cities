import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import {FavoritesScreen} from "./favorites-screen";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const mockStore = configureStore([]);
const store = mockStore(TestMockStore);
const noop = () => {};

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <FavoritesScreen
          loadData={noop}
          appStatus={TestMockData.appStatus}
          cities={TestMockData.cities}
          favoriteOffers={TestMockData.offers}
        />
      </Router>
    </Provider>
);

it(`Should FavoritesScreen render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
