import {extend} from "@utils/common";
import {ActionType} from "@store/action";

const initialState = {
  isAppReady: false,
};

const appReady = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_READY_APP:
      return extend(state, {
        isAppReady: true,
      });
  }

  return state;
};

export {appReady};
