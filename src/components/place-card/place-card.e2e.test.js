import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";
import {TestMockData} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});

describe(`PlaceCard events correct`, () => {

  const mockEvent = {
    preventDefault() {}
  };
  const handleFavoriteButtonClick = jest.fn();
  const handleActiveCardEnter = jest.fn(() => TestMockData.offer.id);
  const handleActiveCardLeave = jest.fn();

  const wrapper = shallow(
      <PlaceCard
        offer={TestMockData.offer}
        onActiveCard={handleActiveCardEnter}
        outActiveCard={handleActiveCardLeave}
        placeCardClassName={`near-places__card`}
        imageWrapperClassName={`near-places__image-wrapper`}
        infoClassName={`image-wrapper`}
        imageWidth={`260`}
        imageHeight={`200`}
        showPremium={true}
        onFavoriteButtonClick={handleFavoriteButtonClick}
        authorizationStatus={`AUTH`}
        favoriteOfferStatus={`BEFORE_SENT`}
        favoriteOfferId={1}
      />
  );

  it(`Should favorite button be pressed`, () => {
    wrapper.find(`.place-card__bookmark-button`).simulate(`click`, mockEvent);
    expect(handleFavoriteButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Should onActiveCard pass to the callback id`, () => {
    wrapper.find(`.place-card`).simulate(`mouseEnter`, mockEvent);

    expect(handleActiveCardEnter).toHaveBeenCalledTimes(1);
    expect(handleActiveCardEnter.mock.calls[0][0]).toEqual(TestMockData.offer.id);
  });

  it(`Should outActiveCard be performed`, () => {
    wrapper.find(`.place-card`).simulate(`mouseLeave`, mockEvent);

    expect(handleActiveCardLeave).toHaveBeenCalledTimes(1);
  });
});
