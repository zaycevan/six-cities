import {getAuthorizationStatus} from "@store/selectors";

export const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});
