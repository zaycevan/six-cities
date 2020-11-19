import {init} from "@store/init";
import {getAppStatus, getOffers} from "@store/selectors";
import {connect} from "react-redux";
import {App} from "./app";

const mapStateToProps = (state) => ({
  isAppReady: getAppStatus(state),
  offers: getOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  initApp() {
    dispatch(init());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
