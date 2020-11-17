import {login} from "@store/api-actions";
import {ActionCreator} from "@store/action";
import {getCurrentCity} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
    dispatch(ActionCreator.setUser(authData.login));
  }
});
