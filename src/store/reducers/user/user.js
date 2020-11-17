import {extend} from "@utils/common";
import {AuthorizationStatus} from "@src/const";
import {ActionType} from "@store/action";

const initialState = {
  user: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
