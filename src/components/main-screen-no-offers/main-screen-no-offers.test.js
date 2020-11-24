import renderer from "react-test-renderer";
import MainScreenNoOffers from "./main-screen-no-offers";
import {TestMockData} from "@src/mocks/test-mocks";

const tree = renderer.create(
    <MainScreenNoOffers
      currentCity={TestMockData.currentCity}
    />
);

it(`Should MainScreenNoOffers render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
