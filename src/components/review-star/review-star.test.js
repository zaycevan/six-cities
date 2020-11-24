import renderer from "react-test-renderer";
import ReviewStar from "./review-star";

const noop = () => {};

const tree = renderer.create(
    <ReviewStar
      onChange={noop}
      id={1}
      title={`perfect`}
      disabled={false}
      rating={`4`}
    />
);

it(`Should ReviewStar render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
