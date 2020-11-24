import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {TestMockData} from "@src/mocks/test-mocks";

const tree = renderer.create(
    <ReviewsList
      reviews={TestMockData.reviews}
    />
);

it(`Should ReviewsList render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
