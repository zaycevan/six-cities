import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import {AppStatus} from "@src/const";

const initialState = {
  appStatus: AppStatus.NOT_READY,
};

const appReady = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_READY_APP:
      return extend(state, {
        appStatus: action.payload,
      });
  }

  return state;
};

export {appReady};
