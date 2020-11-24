import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {RoomScreen} from "./room-screen";
import {TestMockData} from "@src/mocks/test-mocks";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};
const handleFavoriteButtonClick = jest.fn();

const wrapper = shallow(
    <RoomScreen
      loadData={() => {}}
      offer={TestMockData.offer}
      reviews={TestMockData.reviews}
      reviewStatus={`BEFORE_SENT`}
      authorizationStatus={`AUTH`}
      onFavoriteButtonClick={handleFavoriteButtonClick}
      favoriteOfferStatus={`SENT`}
      nearOffers={TestMockData.offers}
      activeCardId={1}
      onActiveCard={() => {}}
      outActiveCard={() => {}}
      appStatus={`PAGE_READY`}
    />
);

it(`Should property favorite button be pressed`, () => {
  wrapper.find(`.property__bookmark-button`).simulate(`click`, mockEvent);
  expect(handleFavoriteButtonClick).toHaveBeenCalledTimes(1);
});
