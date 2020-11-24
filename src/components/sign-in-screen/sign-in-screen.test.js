import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import SignInScreen from "./sign-in-screen-connect";
import {TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <SignInScreen
          onSubmit={noop}
        />
      </Router>
    </Provider>
);

it(`Should SignInScreen render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
