import {getCurrentSort} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});
