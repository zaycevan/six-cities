import {ActionCreator} from "./action";
import {fetchOffers, checkAuth} from "./api-actions";

const init = () => (dispatch, _getState) => (
  dispatch(fetchOffers()).
    then(() => dispatch(ActionCreator.getReadyApp())).
    then(dispatch(checkAuth()))
);

export {init};
