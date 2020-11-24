import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import PrivateRoute from "./private-route-connect";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <PrivateRoute
          offer={TestMockData.offer}
          exact={true}
          path={`/favorites`}
          render={noop}
        />
      </Router>
    </Provider>
);

it(`Should PrivateRoute render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
