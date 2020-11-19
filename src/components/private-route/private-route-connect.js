import {connect} from "react-redux";
import {getAuthorizationStatus} from "@store/selectors";
import {PrivateRoute} from "./private-route";

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
