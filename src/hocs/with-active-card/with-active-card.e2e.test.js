import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card";

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

it(`withActiveCard should activeCardId eq null`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeCardId).toEqual(null);
});
