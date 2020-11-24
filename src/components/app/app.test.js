import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <App
        initApp={noop}
        appStatus={TestMockData.appStatus}
        offers={TestMockData.offers}
      />
    </Provider>
);

it(`Should App render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});


