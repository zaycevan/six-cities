import {ActionCreator} from "./action";
import {fetchOffers, checkAuth} from "./api-actions";
import {AppStatus} from "@src/const";

const init = () => (dispatch, _getState) => {
  dispatch(fetchOffers()).
    then(() => dispatch(ActionCreator.getReadyApp(AppStatus.APP_READY))).
    then(dispatch(checkAuth()));
};

export {init};
