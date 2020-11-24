import renderer from "react-test-renderer";
import withSortOpen from "./with-sort-open";

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

const MockComponentWrapped = withSortOpen(MockComponent);

const tree = renderer.create(
    <MockComponentWrapped >
      <></>
    </MockComponentWrapped>
);

it(`Should withSortOpen render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
