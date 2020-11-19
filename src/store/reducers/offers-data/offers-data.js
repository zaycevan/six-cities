import {extend} from "@utils/common";
import {ActionType} from "@store/action";

const initialState = {
  offers: [],
  nearOffers: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
  }

  return state;
};

export {offersData};
