import renderer from "react-test-renderer";
import Review from "./review";
import {TestMockData} from "@src/mocks/test-mocks";

const tree = renderer.create(
    <Review
      review={TestMockData.review}
    />
);

it(`Should Review render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
