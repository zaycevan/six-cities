import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SortForm from "./sort-form-connect";
import {TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <SortForm
        sortOpen={true}
        onOpenSort={noop}
      />
    </Provider>
);

it(`Should SortForm render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
