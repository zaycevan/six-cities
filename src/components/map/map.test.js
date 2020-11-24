import renderer from "react-test-renderer";
import Map from "./map";
import {TestMockData} from "@src/mocks/test-mocks";

const tree = renderer.create(
    <Map
      currentCity={TestMockData.currentCity}
      offersForCity={TestMockData.offers}
      activeCardId={1}
      mapClassName={`cities__map`}
    />
);

it(`Should Map render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
