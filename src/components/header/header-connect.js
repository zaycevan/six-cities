import {getUser} from "@store/selectors";

export const mapStateToProps = (state) => ({
  user: getUser(state),
});
