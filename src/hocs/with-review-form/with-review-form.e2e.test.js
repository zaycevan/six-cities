import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewFrom from './with-review-form';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewFrom(MockComponent);

describe(`withReviewFrom with correct state`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        offerId={1}
        reviewStatus={`SENT`}
      />
  );

  it(`withReviewFrom with empty data`, () => {
    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().comment).toEqual(``);
  });
});
