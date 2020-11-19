import {connect} from "react-redux";
import {ActionCreator} from "@store/action";
import {getCurrentSort} from "@store/selectors";
import {SortList} from "./sort-list";

export const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.changeSort(sortType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);

