import {extend} from "@utils/common";
import {getOffersForCity} from "@utils/offers";
import {ActionType} from "@store/action";
import cities from "@src/mocks/cities";
import offers from "@src/mocks/offers";
import {SortType} from "@src/const";

const initialState = {
  cities,
  currentCity: cities[0],
  currentSort: SortType.POPULAR,
  sortOpen: false,
  offersForCity: getOffersForCity(cities[0], offers),
  nearOffers: offers.slice(0, 3),
  favoriteOffers: offers.slice(1, 4),
  activeCardId: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.GETTING_OFFERS:
      return extend(state, {
        offersForCity: getOffersForCity(action.payload, offers),
      });
    case ActionType.OPEN_SORT:
      return extend(state, {
        sortOpen: !state.sortOpen,
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        currentSort: action.payload,
      });
    case ActionType.GET_ACTIVE_CARD:
      return extend(state, {
        activeCardId: action.payload,
      });
    case ActionType.LEAVE_ACTIVE_CARD:
      return extend(state, {
        activeCardId: null,
      });
  }

  return state;
};

