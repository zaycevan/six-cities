import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import PlacesList from "./places-list";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <PlacesList
          offer={TestMockData.offer}
          placesListClassName={`cities__places-list`}
          offersForCity={TestMockData.offers}
          type={TestMockData.type}
          currentSort={TestMockData.currentSort}
          onActiveCard={noop}
          outActiveCard={noop}
        />
      </Router>
    </Provider>
);

it(`Should PlacesList render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
