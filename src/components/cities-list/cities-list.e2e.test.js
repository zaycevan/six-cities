import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";
import {TestMockData} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should city button be pressed`, () => {
  const handleCityAction = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={TestMockData.cities}
        currentCity={TestMockData.currentCity}
        onCity={handleCityAction}
      />
  );

  const cityButtons = wrapper.find(`.locations__item-link`);
  cityButtons.forEach((item) => item.simulate(`click`, mockEvent));
  expect(handleCityAction).toHaveBeenCalledTimes(TestMockData.cities.length);
});
