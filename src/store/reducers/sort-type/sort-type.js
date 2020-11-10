import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import {SortType} from "@src/const";

const initialState = {
  currentSort: SortType.POPULAR,
};

const sortType = (state = initialState, action) => {
  switch (action.type) {
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

export {sortType};
