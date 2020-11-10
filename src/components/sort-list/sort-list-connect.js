import {ActionCreator} from "@store/action";
import {getCurrentSort} from "@store/selectors";

export const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});
