import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList from "./cities-list-connect";
import {TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <CitiesList
        onCity={noop}
      />
    </Provider>
);

it(`Should CitiesList render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});

