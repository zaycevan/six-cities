import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SortList from "./sort-list-connect";
import {TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};
const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <SortList
        onSort={noop}
        sortOpen={true}
      />
    </Provider>
);

it(`Should SortList render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
