import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import PlaceCard from "./place-card-connect";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const noop = () => {};

describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  const store = mockStore(TestMockStore);
  store.dispatch = jest.fn();

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={browserHistory}>
          <PlaceCard
            offer={TestMockData.offer}
            onActiveCard={noop}
            outActiveCard={noop}
            placeCardClassName={`cities__place-card`}
            imageWrapperClassName={`cities__image-wrapper`}
            infoClassName={`favorites__card-info`}
            imageWidth={`260`}
            imageHeight={`200`}
            showPremium={true}
            onFavoriteButtonClick={noop}
          />
        </Router>
      </Provider>
  );

  it(`Should PlaceCard render correctly`, () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
