import {connect} from "react-redux";
import {getCurrentSort} from "@store/selectors";
import {SortForm} from "./sort-form";

export const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});

export default connect(mapStateToProps)(SortForm);
