import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "@src/const";
import {mapStateToProps} from "./private-route-connect";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
