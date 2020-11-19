import {connect} from "react-redux";
import {login} from "@store/api-actions";
import {ActionCreator} from "@store/action";
import {getCurrentCity} from "@store/selectors";
import {SignInScreen} from "./sign-in-screen";

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
    dispatch(ActionCreator.setUser(authData.login));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
