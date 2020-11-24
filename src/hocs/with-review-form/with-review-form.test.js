import renderer from "react-test-renderer";
import withReviewFrom from "./with-review-form";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewFrom(MockComponent);

const tree = renderer.create(
    <MockComponentWrapped
      offerId={1}
      reviewStatus={`BEFORE_SENT`}
    >
      <></>
    </MockComponentWrapped>
);

it(`Should withReviewFrom render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
