import renderer from "react-test-renderer";
import FavoritesNoOffers from "./favorites-no-offers";

const tree = renderer.create(
    <FavoritesNoOffers />
);

it(`Should FavoritesNoOffers render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
