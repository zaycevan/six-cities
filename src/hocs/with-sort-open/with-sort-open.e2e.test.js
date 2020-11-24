import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSortOpen from "./with-sort-open";

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withSortOpen(MockComponent);

it(`withSortOpen should sortOpen equal false`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().sortOpen).toEqual(false);
});
