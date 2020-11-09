import {login} from "@store/api-actions";
import {getCurrentCity} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});
