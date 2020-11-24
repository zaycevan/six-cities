import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortForm} from "./sort-form";
import {TestMockData} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});

it(`Should open sort button be pressed`, () => {
  const handleOpenSortAction = jest.fn();

  const wrapper = shallow(
      <SortForm
        sortOpen={true}
        currentSort={TestMockData.currentSort}
        onOpenSort={handleOpenSortAction}
      />
  );

  wrapper.find(`.places__sorting-type`).simulate(`click`);
  expect(handleOpenSortAction).toHaveBeenCalledTimes(1);
});
