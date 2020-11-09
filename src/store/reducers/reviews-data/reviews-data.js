import {extend} from "@utils/common";
import {ActionType} from "@store/action";

const initialState = {
  reviews: []
};

const reviewsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reviewsData};
