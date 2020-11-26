import {connect} from "react-redux";
import {login} from "@store/api-actions";
import {getCurrentCity, getAuthorizationStatus} from "@store/selectors";
import {SignInScreen} from "./sign-in-screen";

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
