import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import cities from "@src/mocks/cities";
import offers from "@src/mocks/offers";
import reviews from "@src/mocks/reviews";
import {SortType} from "@src/const";

const initialState = {
  cities,
  offers,
  reviews,
  currentCity: cities[0],
  currentSort: SortType.POPULAR,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    // case ActionType.GETTING_OFFERS:
    //   return extend(state, {
    //     offersForCity: getOffersForCity(action.payload, offers),
    //   });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
    case ActionType.RESET_SORT:
      return extend(state, {
        currentSort: SortType.POPULAR,
      });
  }

  return state;
};

