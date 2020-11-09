import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import {CITIES} from "@src/const";

const initialState = {
  cities: CITIES,
  currentCity: CITIES[0],
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
  }

  return state;
};

export {citiesData};
