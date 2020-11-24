import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewFrom} from "./review-form";
import {TestMockData} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should submit form when click submit button`, () => {
  const handleSubmitAction = jest.fn();

  const wrapper = shallow(
      <ReviewFrom
        reviewStatus={`BEFORE_SENT`}
        offerId={1}
        onSubmit={handleSubmitAction}
        onChange={() => {}}
        comment={TestMockData.review.text}
        rating={TestMockData.review.rating}
      />
  );

  wrapper.find(`.reviews__form`).simulate(`submit`, mockEvent);
  expect(handleSubmitAction).toHaveBeenCalledTimes(1);
});
