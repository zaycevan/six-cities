import {extend, getOffersForCity} from "@utils/common";
import {ActionType} from "@store/action";
import cities from "@src/mocks/cities";
import offers from "@src/mocks/offers";

const initialState = {
  cities,
  currentCity: cities[0],
  offersForCity: getOffersForCity(cities[0], offers),
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
  }

  return state;
};

