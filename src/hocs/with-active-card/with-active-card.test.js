import renderer from "react-test-renderer";
import withActiveCard from "./with-active-card";

const noop = () => {};

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

const MockComponentWrapped = withActiveCard(MockComponent);

const tree = renderer.create(
    <MockComponentWrapped
      activeCardId={1}
      onActiveCard={noop}
      outActiveCard={noop}
    >
      <></>
    </MockComponentWrapped>
);

it(`Should withActiveCard render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
