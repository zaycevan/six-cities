import {connect} from "react-redux";
import {getUser} from "@store/selectors";
import {Header} from "./header";

export const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Header);
