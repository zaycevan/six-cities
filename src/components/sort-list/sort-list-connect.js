import {ActionCreator} from "@store/action";

export const mapStateToProps = (state) => ({
  currentSort: state.currentSort,
});

export const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});
